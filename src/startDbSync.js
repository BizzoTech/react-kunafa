import PouchDB from "pouchdb";
import RKunafa from "./RKunafa";

import Storage from "store2";

export default (HOST, SSL) => {
  const PROTCOL = SSL === "on" ? "https" : "http";

  let cachedDBName = undefined;
  let outSyncHandler = undefined;
  let inSyncInterval = undefined;

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
      fetch: (url, opts) => fetch(url, { ...opts, credentials: "include" })
    });

    if (outSyncHandler) {
      outSyncHandler.cancel();
    }
    if (inSyncInterval) {
      clearInterval(inSyncInterval);
    }

    if (dbName === "anonymous") {
      outSyncHandler = localDB.replicate.to(remoteDB, {
        live: true,
        retry: true
      });
    } else {
      const onSyncError = async err => {
        if (err && err.status === 401) {
          const sessionRes = await authenticate();

          if (sessionRes.status === 401) {
            //Unauthorized user
            RKunafa.logout();
            location.reload(); //FIXME
          }
        } else {
          cachedDBName = undefined;
        }
      };

      localDB.replicate
        .from(remoteDB)
        .on("error", onSyncError)
        .on("complete", () => {
          inSyncInterval = setInterval(() => {
            localDB.replicate.from(remoteDB).on("error", onSyncError);
          }, 1000 * 5);

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

  setInterval(createSyncHandler, 1000);

  const localSharedDB = new PouchDB("shared", { auto_compaction: true });
  const sharedDbUrl = `${PROTCOL}://${HOST}/shared`;
  const remoteSharedDB = new PouchDB(sharedDbUrl);

  const syncShared = () => {
    localSharedDB.replicate.from(remoteSharedDB);
  };

  syncShared();
  const syncSharedInterval = 1 * 1000 * 60;
  setInterval(syncShared, syncSharedInterval);
};
