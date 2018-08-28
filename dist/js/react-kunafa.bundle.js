(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("store2"), require("react"), require("kunafa-client"), require("pouchdb"), require("platform"), require("i18n-js"), require("react-redux"), require("react-dom"), require("ramda"), require("uuid"), require("reselect"), require("react-dom/server"));
	else if(typeof define === 'function' && define.amd)
		define("reactKunafa", ["store2", "react", "kunafa-client", "pouchdb", "platform", "i18n-js", "react-redux", "react-dom", "ramda", "uuid", "reselect", "react-dom/server"], factory);
	else if(typeof exports === 'object')
		exports["reactKunafa"] = factory(require("store2"), require("react"), require("kunafa-client"), require("pouchdb"), require("platform"), require("i18n-js"), require("react-redux"), require("react-dom"), require("ramda"), require("uuid"), require("reselect"), require("react-dom/server"));
	else
		root["reactKunafa"] = factory(root["store2"], root["react"], root["kunafa-client"], root["pouchdb"], root["platform"], root["i18n-js"], root["react-redux"], root["react-dom"], root["ramda"], root["uuid"], root["reselect"], root["react-dom/server"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__11__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "sharedDocsSelector", function() { return sharedDocsSelector; });
__webpack_require__.d(selectors_namespaceObject, "translationsSelector", function() { return translationsSelector; });
var auth_namespaceObject = {};
__webpack_require__.r(auth_namespaceObject);
__webpack_require__.d(auth_namespaceObject, "skipLogin", function() { return skipLogin; });
__webpack_require__.d(auth_namespaceObject, "startLoading", function() { return startLoading; });
__webpack_require__.d(auth_namespaceObject, "userLogin", function() { return userLogin; });
__webpack_require__.d(auth_namespaceObject, "userLogout", function() { return userLogout; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(7);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6);

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(9);
var external_uuid_default = /*#__PURE__*/__webpack_require__.n(external_uuid_);

// EXTERNAL MODULE: external "store2"
var external_store2_ = __webpack_require__(0);
var external_store2_default = /*#__PURE__*/__webpack_require__.n(external_store2_);

// EXTERNAL MODULE: external "kunafa-client"
var external_kunafa_client_ = __webpack_require__(2);

// CONCATENATED MODULE: ./src/cacheStore.js

/* harmony default export */ var cacheStore = ({
  keys: external_store2_default.a.keys.bind(external_store2_default.a),
  get: external_store2_default.a.get.bind(external_store2_default.a),
  save: external_store2_default.a.set.bind(external_store2_default.a),
  delete: external_store2_default.a.remove.bind(external_store2_default.a),
  getAll: async () => {
    const items = external_store2_default.a.getAll();
    return Object.values(items);
  }
});
// CONCATENATED MODULE: ./src/RKunafa.js


const login = (username, password, profileId) => {
  return cacheStore.save("authCreds", {
    username,
    password,
    profileId
  });
};

const logout = (username, password, profileId) => {
  return cacheStore.delete("authCreds");
};

const getProfileId = () => {
  const authCreds = cacheStore.get("authCreds");
  return authCreds ? authCreds.profileId : undefined;
};

/* harmony default export */ var RKunafa = ({
  login,
  logout,
  getProfileId
});
// EXTERNAL MODULE: external "pouchdb"
var external_pouchdb_ = __webpack_require__(3);
var external_pouchdb_default = /*#__PURE__*/__webpack_require__.n(external_pouchdb_);

// CONCATENATED MODULE: ./src/startDbSync.js



/* harmony default export */ var startDbSync = ((HOST, SSL) => {
  const PROTCOL = SSL === "on" ? "https" : "http";
  let cachedDBName = undefined;
  let outSyncHandler = undefined;
  let inSyncHandler = undefined;
  let inSyncTimeout = undefined;
  let sharedSyncHandler = undefined;
  let errorCount = 0;

  const createSyncHandler = async () => {
    //console.log("Create Sync Handler");
    const authCreds = external_store2_default.a.get("authCreds");
    const dbName = authCreds ? authCreds.profileId : "anonymous";

    if (dbName === cachedDBName) {
      return;
    }

    const authenticate = async () => {
      if (!authCreds) return;

      try {
        return await fetch(`${PROTCOL}://${HOST}/_session`, {
          method: "post",
          headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          credentials: "same-origin",
          body: `name=${authCreds.username}&password=${authCreds.password}`
        });
      } catch (error) {
        return;
      }
    };

    const sessionRes = await authenticate();

    if (!sessionRes) {
      return; //User is offline
    }

    const localDB = new external_pouchdb_default.a(dbName, {
      auto_compaction: true
    });
    const dbUrl = authCreds ? `${PROTCOL}://${authCreds.username}:${authCreds.password}@${HOST}/db` : `${PROTCOL}://${HOST}/anonymous`;
    const remoteDB = new external_pouchdb_default.a(dbUrl, {
      fetch: (url, opts) => {
        opts.headers.set("X-PouchDB", "true");
        opts.credentials = "include";
        return external_pouchdb_default.a.fetch(url, opts);
      }
    });

    if (outSyncHandler) {
      outSyncHandler.cancel();
    }

    if (inSyncHandler) {
      inSyncHandler.cancel();
    }

    if (inSyncTimeout) {
      clearTimeout(inSyncTimeout);
    }

    if (dbName === "anonymous") {
      outSyncHandler = localDB.replicate.to(remoteDB, {
        live: true,
        retry: true
      });
      cachedDBName = dbName;
    } else {
      const onSyncError = async err => {
        const sessionRes = await authenticate();

        if (sessionRes && sessionRes.status === 401) {
          //Unauthorized user
          RKunafa.logout();
          location.reload(); //FIXME
        } else {
          cachedDBName = undefined; //console.log(err);

          if (outSyncHandler) {
            outSyncHandler.cancel();
            outSyncHandler = undefined;
          }

          if (inSyncHandler) {
            inSyncHandler.cancel();
            inSyncHandler = undefined;
          }

          if (inSyncTimeout) {
            clearTimeout(inSyncTimeout);
            inSyncTimeout = undefined;
          }

          errorCount += 1; //console.log(errorCount);
        }
      };

      const startTime = Date.now();
      console.log("Initial Replication started at", new Date(startTime));
      inSyncHandler = localDB.replicate.from(remoteDB).on("denied", onSyncError).on("error", onSyncError).on("complete", () => {
        const endTime = Date.now();
        console.log("Initial Replication ended at", new Date(endTime));
        console.log("Initial load took ", (endTime - startTime) / 1000);

        const replicateFromRemote = () => {
          if (inSyncHandler) {
            inSyncHandler.cancel();
          }

          inSyncHandler = localDB.replicate.from(remoteDB).on("denied", onSyncError).on("error", onSyncError).on("complete", () => {
            inSyncTimeout = setTimeout(replicateFromRemote, 5000);
          });
        };

        replicateFromRemote();
        outSyncHandler = localDB.replicate.to(remoteDB, {
          live: true,
          retry: true,
          back_off_function: function back_off_function(delay) {
            if (delay === 0) {
              return 1000;
            }

            return delay < 5000 ? delay + 1000 : 5000;
          }
        }).on("denied", onSyncError).on("error", onSyncError);
        cachedDBName = dbName;
      });
    }
  }; //setInterval(createSyncHandler, 1000);


  const localSharedDB = new external_pouchdb_default.a("shared", {
    auto_compaction: true
  });
  const sharedDbUrl = `${PROTCOL}://${HOST}/shared`;
  const remoteSharedDB = new external_pouchdb_default.a(sharedDbUrl, {
    fetch: (url, opts) => {
      opts.headers.set("X-PouchDB", "true");
      opts.credentials = "include";
      return external_pouchdb_default.a.fetch(url, opts);
    }
  });

  const syncShared = async () => {
    if (sharedSyncHandler) {
      sharedSyncHandler.cancel();
    }

    sharedSyncHandler = localSharedDB.replicate.from(remoteSharedDB).on("error", () => sharedSyncHandler.cancel()).on("paused", () => sharedSyncHandler.cancel());
  }; // syncShared();
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
      } // await syncShared();
      // const syncSharedIntervalPeriod = 1 * 1000 * 60;
      // sharedSyncInterval = setInterval(syncShared, syncSharedIntervalPeriod);

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

      if (inSyncHandler) {
        inSyncHandler.cancel();
      }

      if (inSyncTimeout) {
        clearTimeout(inSyncTimeout);
      }

      if (sharedSyncHandler) {
        sharedSyncHandler.cancel();
      }

      mainSyncInterval = undefined;
      sharedSyncInterval = undefined;
      outSyncHandler = undefined;
      inSyncHandler = undefined;
      inSyncTimeout = undefined;
      sharedSyncHandler = undefined;
      cachedDBName = undefined;
    }
  };
});
// EXTERNAL MODULE: external "platform"
var external_platform_ = __webpack_require__(4);
var external_platform_default = /*#__PURE__*/__webpack_require__.n(external_platform_);

// CONCATENATED MODULE: ./src/deviceInfo.js

const description = external_platform_default.a.description,
      layout = external_platform_default.a.layout,
      ua = external_platform_default.a.ua;
/* harmony default export */ var deviceInfo = ({
  description,
  layout,
  user_agent: ua,
  architecture: external_platform_default.a.os.architecture,
  osFamily: external_platform_default.a.os.family,
  device_unique_id: "browser_session"
});
// EXTERNAL MODULE: external "reselect"
var external_reselect_ = __webpack_require__(10);

// EXTERNAL MODULE: external "i18n-js"
var external_i18n_js_ = __webpack_require__(5);
var external_i18n_js_default = /*#__PURE__*/__webpack_require__.n(external_i18n_js_);

// CONCATENATED MODULE: ./src/selectors.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const R = __webpack_require__(8);


const sharedDocsSelector = state => state.sharedDocs;
const translationsSelector = Object(external_reselect_["createSelector"])(sharedDocsSelector, sharedDocs => {
  const newTranslations = R.filter(d => d.type === "translation", sharedDocs);
  const newTranslationsObj = Object.values(newTranslations).reduce((obj, o) => {
    return _objectSpread({}, obj, {
      [o.lang]: o.doc
    });
  }, {});
  const newMergedTranslations = R.mergeDeepRight(external_i18n_js_default.a.translations, newTranslationsObj);
  external_i18n_js_default.a.translations = newMergedTranslations;
  return newMergedTranslations;
});
// CONCATENATED MODULE: ./src/middlewares/navigationMiddleware.js
const routeToPath = route => {
  return "/" + route.path.join("/");
};

const pathToRoute = path => {
  return {
    path: path.substr(1).split("/")
  };
};

/* harmony default export */ var navigationMiddleware = ((store, config) => next => {
  const path = document.location.pathname;
  const route = pathToRoute(path);
  next(config.actionCreators.goTo(route.path, route.params));
  window.addEventListener("popstate", function (event) {
    const state = store.getState();

    if (state.dialog.name) {
      next(config.actionCreators.closeDialog());
      const currentRoute = {
        path: state.history.path
      };
      history.pushState(currentRoute, "", routeToPath(currentRoute));
      return;
    }

    const path = document.location.pathname;
    const route = pathToRoute(path);
    next(config.actionCreators.goTo(route.path, route.params));
  });
  return action => {
    if (action.type === "NAVIGATE_TO") {
      history.pushState(action.route, "", routeToPath(action.route));
    }

    if (action.type === "GO_TO" || action.type === "TRANSITE_TO") {
      history.replaceState(action.route, "", routeToPath(action.route));
    }

    if (action.type === "RESET_HISTORY") {
      history.replaceState({}, "", "/");
    }

    return next(action);
  };
});
// CONCATENATED MODULE: ./src/middlewares/index.js

/* harmony default export */ var middlewares = ([navigationMiddleware]);
// CONCATENATED MODULE: ./src/actionCreators/auth.js

const skipLogin = () => {
  return {
    type: "SKIP_LOGIN"
  };
};

const auth_login = async (hostUrl, user) => {
  const response = await fetch(hostUrl + "/_session", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

  if (response.status == 200) {
    return response.json();
  } else {
    console.log(response);
    throw new Error("Login Error");
  }
};

const fetchUser = async (hostUrl, user_id) => {
  const url = hostUrl + "/_users/" + user_id;
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json"
    }
  });

  if (response.status == 200) {
    return response.json();
  } else {
    throw new Error("Request Error");
  }
};

const auth = async (name, password, hostUrl) => {
  const session = await auth_login(hostUrl, {
    name,
    password
  });
  const userId = "org.couchdb.user:" + session.name;
  return await fetchUser(hostUrl, userId);
};

const startLoading = () => {
  return {
    type: "START_LOADING"
  };
};
const userLogin = (name, password, event, {
  actionCreators,
  HOST,
  SSL
}) => {
  const PROTCOL = SSL === "on" ? "https" : "http";
  return async dispatch => {
    dispatch({
      type: "START_LOADING"
    });

    try {
      const user = await auth(name, password, `${PROTCOL}://${HOST}`);
      RKunafa.login(name, password, user.profileId);

      if (event) {
        dispatch(event.action);
      } else {
        dispatch(actionCreators.fetchDoc({
          _id: user.profileId
        }));
      }

      dispatch({
        type: "LOGIN",
        profileId: user.profileId
      });
    } catch (e) {
      console.log(e);
    }
  };
};
const userLogout = () => {
  return dispatch => {
    dispatch({
      type: "START_LOADING"
    });
    RKunafa.logout();
    dispatch({
      type: "LOGOUT"
    });
  };
};
// CONCATENATED MODULE: ./src/actionCreators/index.js
function actionCreators_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { actionCreators_defineProperty(target, key, source[key]); }); } return target; }

function actionCreators_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var src_actionCreators = (actionCreators_objectSpread({}, auth_namespaceObject));
// CONCATENATED MODULE: ./src/createApp.js
function createApp_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { createApp_defineProperty(target, key, source[key]); }); } return target; }

function createApp_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















class createApp_App extends external_react_["Component"] {
  render() {
    const Main = this.props.main;
    return external_react_default.a.createElement(external_react_redux_["Provider"], {
      store: this.props.store
    }, external_react_default.a.createElement(Main, null));
  }

}

const tabId = external_uuid_default.a.v4();

const refreshTabs = () => {
  const activeTabs = external_store2_default.a.get("activeTabs") || [];
  const filteredTabs = activeTabs.filter(tab => tab.id !== tabId && tab.time > Date.now() - 2000);
  external_store2_default.a.set("activeTabs", [...filteredTabs, {
    id: tabId,
    time: Date.now()
  }]);
};

refreshTabs();
setInterval(refreshTabs, 1000);

const isOpenInOtherTab = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(external_store2_default.a.get("activeTabs") && external_store2_default.a.get("activeTabs").length > 1);
  }, 2500);
});

/* harmony default export */ var createApp = ((name, MAIN, appConfig) => {
  //startDbSync(appConfig.HOST, appConfig.SSL);
  const profileId = RKunafa.getProfileId();

  const config = createApp_objectSpread({
    profileId,
    getLocalDbUrl: profileId => {
      return profileId || "anonymous";
    },
    deviceInfo: deviceInfo,
    cacheStore: cacheStore,
    isConnected: async () => {
      return await navigator.onLine;
    },
    //startDbSync: () => startDbSync(appConfig.HOST, appConfig.SSL),
    dbSyncObj: startDbSync(appConfig.HOST, appConfig.SSL),
    isOpenInOtherTab
  }, appConfig, {
    actionCreators: createApp_objectSpread({}, appConfig.actionCreators, src_actionCreators),
    selectors: createApp_objectSpread({}, appConfig.selectors, selectors_namespaceObject),
    middlewares: appConfig.middlewares ? [...appConfig.middlewares, ...middlewares] : middlewares
  });

  if (window.__PRELOADED_STATE__) {
    const preloadedState = window.__PRELOADED_STATE__; // Allow the passed state to be garbage-collected

    delete window.__PRELOADED_STATE__;
    let defaultState = preloadedState;

    if (profileId) {
      defaultState = createApp_objectSpread({}, preloadedState, {
        currentProfile: {
          _id: profileId
        }
      });
    }

    const AppStore = Object(external_kunafa_client_["createStore"])(config, defaultState);
    Object(external_react_dom_["hydrate"])(external_react_default.a.createElement(createApp_App, {
      store: AppStore,
      main: MAIN
    }), document.getElementById("root"));

    if (profileId) {
      AppStore.dispatch(AppStore.actions.fetchDoc({
        _id: profileId
      }));
      AppStore.dispatch({
        type: "LOGIN",
        profileId: profileId
      });
    }
  } else {
    const AppStore = Object(external_kunafa_client_["createStore"])(config);
    Object(external_react_dom_["render"])(external_react_default.a.createElement(createApp_App, {
      store: AppStore,
      main: MAIN
    }), document.getElementById("root"));
  }
});
// EXTERNAL MODULE: external "react-dom/server"
var server_ = __webpack_require__(11);
var server_default = /*#__PURE__*/__webpack_require__.n(server_);

// CONCATENATED MODULE: ./src/createSsrApp.js
function createSsrApp_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { createSsrApp_defineProperty(target, key, source[key]); }); } return target; }

function createSsrApp_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class createSsrApp_App extends external_react_["Component"] {
  render() {
    const Main = this.props.main;
    return external_react_default.a.createElement(external_react_redux_["Provider"], {
      store: this.props.store
    }, external_react_default.a.createElement(Main, null));
  }

}

/* harmony default export */ var createSsrApp = ((name, MAIN, appConfig) => {
  const config = createSsrApp_objectSpread({
    getLocalDbUrl: profileId => {
      return profileId || "anonymous";
    },
    ssr: true
  }, appConfig, {
    actionCreators: createSsrApp_objectSpread({}, appConfig.actionCreators, src_actionCreators),
    selectors: createSsrApp_objectSpread({}, appConfig.selectors, selectors_namespaceObject),
    middlewares: [...appConfig.middlewares, ...middlewares]
  });

  const AppStore = Object(external_kunafa_client_["createStore"])(config);
  return {
    getHtml: () => server_default.a.renderToString(external_react_default.a.createElement(createSsrApp_App, {
      store: AppStore,
      main: MAIN
    })),
    store: AppStore
  };
});
// CONCATENATED MODULE: ./src/connect.js
function connect_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { connect_defineProperty(target, key, source[key]); }); } return target; }

function connect_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const connect = (mapStateToProps, mapDispatchToProps) => component => {
  return Object(external_kunafa_client_["connect"])((state, ownProps) => {
    const translations = ownProps.selectors.translationsSelector ? ownProps.selectors.translationsSelector(state) : external_i18n_js_default.a.translations;

    if (mapStateToProps) {
      return connect_objectSpread({}, mapStateToProps(state, ownProps), {
        translations
      });
    } else {
      return {
        translations
      };
    }
  }, mapDispatchToProps)(component);
};

/* harmony default export */ var src_connect = (connect);
// CONCATENATED MODULE: ./src/Authorize.js



const Authorize_R = __webpack_require__(8);

const Authorize = ({
  children,
  allow,
  loggedIn,
  currentProfile,
  renderWhenNotAuthorized,
  renderWhenNotLoggedIn
}) => {
  if (!loggedIn) {
    return renderWhenNotLoggedIn ? renderWhenNotLoggedIn() : renderWhenNotAuthorized ? renderWhenNotAuthorized() : null;
  }

  const allowedRoles = allow || ["user"];
  const roles = currentProfile.roles ? ["user", ...currentProfile.roles] : ["user"];

  if (roles.includes("admin") || Authorize_R.intersection(allowedRoles, roles).length > 0) {
    return children;
  }

  return renderWhenNotAuthorized ? renderWhenNotAuthorized() : null;
};

/* harmony default export */ var src_Authorize = (src_connect((state, {
  selectors
}) => {
  return {
    loggedIn: selectors.currentUserIdSelector(state) !== undefined,
    currentProfile: selectors.currentUserProfileSelector(state)
  };
})(Authorize));
// CONCATENATED MODULE: ./src/StaticContent.js



class StaticContent_StaticContent extends external_react_["Component"] {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.route !== nextProps.route) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return this.props.children;
  }

}

/* harmony default export */ var src_StaticContent = (src_connect((state, {
  selectors
}) => {
  return {
    route: state.history
  };
})(StaticContent_StaticContent));
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport createApp */__webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* concated harmony reexport createSsrApp */__webpack_require__.d(__webpack_exports__, "createSsrApp", function() { return createSsrApp; });
/* concated harmony reexport connect */__webpack_require__.d(__webpack_exports__, "connect", function() { return src_connect; });
/* concated harmony reexport Authorize */__webpack_require__.d(__webpack_exports__, "Authorize", function() { return src_Authorize; });
/* concated harmony reexport StaticContent */__webpack_require__.d(__webpack_exports__, "StaticContent", function() { return src_StaticContent; });






/* harmony default export */ var src = __webpack_exports__["default"] = (RKunafa);


/***/ })
/******/ ]);
});