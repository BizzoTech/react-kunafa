import PouchDB from "pouchdb";
import RKunafa from "./RKunafa";

import Storage from "store2";

export default (HOST, SSL) => {
  const PROTCOL = SSL === "on" ? "https" : "http";

  let cachedDBName = undefined;
  let outSyncHandler = undefined;
  let inSyncTimeout = undefined;

  const createSyncHandler = async () => {
    const authCreds = Storage.get("authCreds");
    const dbName = authCreds ? authCreds.profileId : "anonymous";
    if (dbName === cachedDBName) {
      return;
    }

    const authenticate = async () => {
      if (!authCreds) return;
      return await fetch(`${PROTCOL}://${HOST}/_session`, {
        method: "post",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        credentials: "same-origin",
        body: `name=${authCreds.username}&password=${authCreds.password}`
      });
    };

    await authenticate();

    const localDB = new PouchDB(dbName, { auto_compaction: true });

    const dbUrl = authCreds
      ? `${PROTCOL}://${HOST}/db`
      : `${PROTCOL}://${HOST}/anonymous`;

    const remoteDB = new PouchDB(dbUrl, {
      fetch: (url, opts) => {
        opts.headers.set("X-PouchDB", "true");
        opts.credentials = "include";
        return PouchDB.fetch(url, opts);
      }
    });

    if (outSyncHandler) {
      outSyncHandler.cancel();
    }
    if (inSyncTimeout) {
      clearTimeout(inSyncTimeout);
    }

    if (dbName === "anonymous") {
      outSyncHandler = localDB.replicate.to(remoteDB, {
        live: true,
        retry: true
      });
    } else {
      const onSyncError = async err => {
        const sessionRes = await authenticate();

        if (sessionRes.status === 401) {
          //Unauthorized user
          RKunafa.logout();
          location.reload(); //FIXME
        } else {
          console.log(err);
        }
      };
      const startTime = Date.now();
      console.log("Initial Replication started at", new Date(startTime));
      localDB.replicate
        .from(remoteDB)
        .on("error", onSyncError)
        .on("complete", () => {
          const endTime = Date.now();
          console.log("Initial Replication ended at", new Date(endTime));
          console.log("Initial load took ", (endTime - startTime) / 1000);

          const replicateFromRemote = () => {
            localDB.replicate
              .from(remoteDB)
              .on("error", onSyncError)
              .on("complete", () => {
                inSyncTimeout = setTimeout(replicateFromRemote, 5000);
              });
          };
          replicateFromRemote();

          outSyncHandler = localDB.replicate
            .to(remoteDB, {
              live: true,
              retry: false
            })
            .on("error", onSyncError);
        });
    }

    cachedDBName = dbName;
  };

  //setInterval(createSyncHandler, 1000);

  const localSharedDB = new PouchDB("shared", { auto_compaction: true });
  const sharedDbUrl = `${PROTCOL}://${HOST}/shared`;
  const remoteSharedDB = new PouchDB(sharedDbUrl, {
    fetch: (url, opts) => {
      opts.headers.set("X-PouchDB", "true");
      opts.credentials = "include";
      return PouchDB.fetch(url, opts);
    }
  });

  const syncShared = async () => {
    await localSharedDB.replicate.from(remoteSharedDB);
  };

  // syncShared();
  // const syncSharedInterval = 1 * 1000 * 60;
  // setInterval(syncShared, syncSharedInterval);

  let mainSyncInterval;
  let sharedSyncInterval;

  return {
    start: async () => {
      if (mainSyncInterval) {
        clearInterval(mainSyncInterval);
      }
      await createSyncHandler();
      mainSyncInterval = setInterval(createSyncHandler, 10000);

      if (sharedSyncInterval) {
        clearInterval(sharedSyncInterval);
      }
      await syncShared();
      const syncSharedIntervalPeriod = 1 * 1000 * 60;
      sharedSyncInterval = setInterval(syncShared, syncSharedIntervalPeriod);
    },
    stop: () => {
      if (mainSyncInterval) {
        clearInterval(mainSyncInterval);
      }
      if (sharedSyncInterval) {
        clearInterval(sharedSyncInterval);
      }
      if (outSyncHandler) {
        outSyncHandler.cancel();
      }
      if (inSyncTimeout) {
        clearTimeout(inSyncTimeout);
      }
      mainSyncInterval = undefined;
      sharedSyncInterval = undefined;
      outSyncHandler = undefined;
      inSyncTimeout = undefined;
      cachedDBName = undefined;
    }
  };
};
