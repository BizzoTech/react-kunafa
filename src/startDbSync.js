import PouchDB from 'pouchdb';
import RKunafa from './RKunafa';

import Storage from 'store2';


export default (HOST, SSL) => {
  const PROTCOL = SSL === "on" ? 'https' : 'http';

  let cachedDBName = undefined;
  let outSyncHandler = undefined;
  let inSyncInterval = undefined;

  const createSyncHandler = () => {
    const authCreds = Storage.get('authCreds');
    const dbName = authCreds
      ? authCreds.profileId
      : 'anonymous';
    if (dbName === cachedDBName) {
      return;
    }

    const localDB = new PouchDB(dbName, { auto_compaction: true });

    const dbUrl = authCreds
      ? `${PROTCOL}://${authCreds.username}:${authCreds.password}@${HOST}/db`
      : `${PROTCOL}://${HOST}/anonymous`;

    const remoteDB = new PouchDB(dbUrl);

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

      const onSyncError = err => {
        if (err && err.status === 401) { //Unauthorized user
          RKunafa.logout();
          location.reload(); //FIXME
        } else {
          cachedDBName = undefined;
        }
      }

      inSyncInterval = setInterval(() => {
        localDB.replicate.from(remoteDB, {
          selector: authCreds ? {
            _id: {
              $regex: `^${authCreds.profileId}`
            }
          } : undefined
        }).on("error", onSyncError);
      }, 1000 * 60);

      outSyncHandler = localDB.replicate.to(remoteDB, {
        live: true,
        retry: false,
        selector: authCreds ? {
          _id: {
            $regex: `^${authCreds.profileId}`
          }
        } : undefined
      }).on("error", onSyncError);
    }


    cachedDBName = dbName;
  }


  setInterval(createSyncHandler, 1000);


  const localSharedDB = new PouchDB("shared", { auto_compaction: true });
  const sharedDbUrl = `${PROTCOL}://${HOST}/shared`;
  const remoteSharedDB = new PouchDB(sharedDbUrl);

  const syncShared = () => {
    localSharedDB.replicate.from(remoteSharedDB);
  }

  syncShared();
  const syncSharedInterval = 1 * 1000 * 60;
  setInterval(syncShared, syncSharedInterval);
}