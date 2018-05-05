(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("kunafa-client"), require("react-redux"), require("store2"), require("i18n-js"), require("ramda"), require("react-dom"), require("pouchdb"), require("platform"), require("reselect"), require("react-dom/server"));
	else if(typeof define === 'function' && define.amd)
		define("reactKunafa", ["react", "kunafa-client", "react-redux", "store2", "i18n-js", "ramda", "react-dom", "pouchdb", "platform", "reselect", "react-dom/server"], factory);
	else if(typeof exports === 'object')
		exports["reactKunafa"] = factory(require("react"), require("kunafa-client"), require("react-redux"), require("store2"), require("i18n-js"), require("ramda"), require("react-dom"), require("pouchdb"), require("platform"), require("reselect"), require("react-dom/server"));
	else
		root["reactKunafa"] = factory(root["react"], root["kunafa-client"], root["react-redux"], root["store2"], root["i18n-js"], root["ramda"], root["react-dom"], root["pouchdb"], root["platform"], root["reselect"], root["react-dom/server"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_23__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cacheStore = __webpack_require__(4);

var _cacheStore2 = _interopRequireDefault(_cacheStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(username, password, profileId) {
  return _cacheStore2.default.save("authCreds", {
    username: username,
    password: password,
    profileId: profileId
  });
};

var logout = function logout(username, password, profileId) {
  return _cacheStore2.default.delete("authCreds");
};

var getProfileId = function getProfileId() {
  var authCreds = _cacheStore2.default.get("authCreds");
  return authCreds ? authCreds.profileId : undefined;
};

exports.default = {
  login: login,
  logout: logout,
  getProfileId: getProfileId
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = __webpack_require__(5);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  keys: _store2.default.keys.bind(_store2.default),
  get: _store2.default.get.bind(_store2.default),
  save: _store2.default.set.bind(_store2.default),
  delete: _store2.default.remove.bind(_store2.default),
  getAll: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var items;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              items = _store2.default.getAll();
              return _context.abrupt("return", Object.values(items));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function getAll() {
      return _ref.apply(this, arguments);
    };
  }()
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translationsSelector = exports.sharedDocsSelector = undefined;

var _reselect = __webpack_require__(19);

var _i18nJs = __webpack_require__(7);

var _i18nJs2 = _interopRequireDefault(_i18nJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var R = __webpack_require__(8);
var sharedDocsSelector = exports.sharedDocsSelector = function sharedDocsSelector(state) {
  return state.sharedDocs;
};

var translationsSelector = exports.translationsSelector = (0, _reselect.createSelector)(sharedDocsSelector, function (sharedDocs) {
  var newTranslations = R.filter(function (d) {
    return d.type === "translation";
  }, sharedDocs);
  var newTranslationsObj = Object.values(newTranslations).reduce(function (obj, o) {
    return Object.assign({}, obj, _defineProperty({}, o.lang, o.doc));
  }, {});
  var newMergedTranslations = R.mergeDeepRight(_i18nJs2.default.translations, newTranslationsObj);
  _i18nJs2.default.translations = newMergedTranslations;
  return newMergedTranslations;
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navigationMiddleware = __webpack_require__(20);

var _navigationMiddleware2 = _interopRequireDefault(_navigationMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_navigationMiddleware2.default];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _auth = __webpack_require__(21);

var authActions = _interopRequireWildcard(_auth);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = Object.assign({}, authActions);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _kunafaClient = __webpack_require__(2);

var _i18nJs = __webpack_require__(7);

var _i18nJs2 = _interopRequireDefault(_i18nJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connect = function connect(mapStateToProps, mapDispatchToProps) {
  return function (component) {
    return (0, _kunafaClient.connect)(function (state, ownProps) {
      var translations = ownProps.selectors.translationsSelector ? ownProps.selectors.translationsSelector(state) : _i18nJs2.default.translations;
      if (mapStateToProps) {
        return Object.assign({}, mapStateToProps(state, ownProps), {
          translations: translations
        });
      } else {
        return {
          translations: translations
        };
      }
    }, mapDispatchToProps)(component);
  };
};

exports.default = connect;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Authorize = exports.connect = exports.createSsrApp = exports.createApp = undefined;

var _createApp = __webpack_require__(13);

var _createApp2 = _interopRequireDefault(_createApp);

var _createSsrApp = __webpack_require__(22);

var _createSsrApp2 = _interopRequireDefault(_createSsrApp);

var _connect = __webpack_require__(11);

var _connect2 = _interopRequireDefault(_connect);

var _Authorize = __webpack_require__(24);

var _Authorize2 = _interopRequireDefault(_Authorize);

var _RKunafa = __webpack_require__(0);

var _RKunafa2 = _interopRequireDefault(_RKunafa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _RKunafa2.default;
exports.createApp = _createApp2.default;
exports.createSsrApp = _createSsrApp2.default;
exports.connect = _connect2.default;
exports.Authorize = _Authorize2.default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactRedux = __webpack_require__(3);

var _kunafaClient = __webpack_require__(2);

var _RKunafa = __webpack_require__(0);

var _RKunafa2 = _interopRequireDefault(_RKunafa);

var _startDbSync = __webpack_require__(15);

var _startDbSync2 = _interopRequireDefault(_startDbSync);

var _deviceInfo = __webpack_require__(17);

var _deviceInfo2 = _interopRequireDefault(_deviceInfo);

var _cacheStore = __webpack_require__(4);

var _cacheStore2 = _interopRequireDefault(_cacheStore);

var _selectors = __webpack_require__(6);

var selectors = _interopRequireWildcard(_selectors);

var _middlewares = __webpack_require__(9);

var _middlewares2 = _interopRequireDefault(_middlewares);

var _actionCreators = __webpack_require__(10);

var _actionCreators2 = _interopRequireDefault(_actionCreators);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var Main = this.props.main;
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: this.props.store },
        _react2.default.createElement(Main, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = function (name, MAIN, appConfig) {
  (0, _startDbSync2.default)(appConfig.HOST, appConfig.SSL);

  var profileId = _RKunafa2.default.getProfileId();

  var config = Object.assign({
    profileId: profileId,
    getLocalDbUrl: function getLocalDbUrl(profileId) {
      return profileId || "anonymous";
    },
    deviceInfo: _deviceInfo2.default,
    cacheStore: _cacheStore2.default,
    isConnected: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return navigator.onLine;

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function isConnected() {
        return _ref.apply(this, arguments);
      };
    }()
  }, appConfig, {
    actionCreators: Object.assign({}, appConfig.actionCreators, _actionCreators2.default),
    selectors: Object.assign({}, appConfig.selectors, selectors),
    middlewares: appConfig.middlewares ? [].concat(_toConsumableArray(appConfig.middlewares), _toConsumableArray(_middlewares2.default)) : _middlewares2.default
  });

  if (window.__PRELOADED_STATE__) {
    var preloadedState = window.__PRELOADED_STATE__;

    // Allow the passed state to be garbage-collected
    delete window.__PRELOADED_STATE__;
    var AppStore = (0, _kunafaClient.createStore)(config, preloadedState);

    (0, _reactDom.hydrate)(_react2.default.createElement(App, { store: AppStore, main: MAIN }), document.getElementById("root"));
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
    var _AppStore = (0, _kunafaClient.createStore)(config);
    (0, _reactDom.render)(_react2.default.createElement(App, { store: _AppStore, main: MAIN }), document.getElementById("root"));
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pouchdb = __webpack_require__(16);

var _pouchdb2 = _interopRequireDefault(_pouchdb);

var _RKunafa = __webpack_require__(0);

var _RKunafa2 = _interopRequireDefault(_RKunafa);

var _store = __webpack_require__(5);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (HOST, SSL) {
  var PROTCOL = SSL === "on" ? "https" : "http";

  var cachedDBName = undefined;
  var outSyncHandler = undefined;
  var inSyncInterval = undefined;

  var createSyncHandler = function createSyncHandler() {
    var authCreds = _store2.default.get("authCreds");
    var dbName = authCreds ? authCreds.profileId : "anonymous";
    if (dbName === cachedDBName) {
      return;
    }

    var localDB = new _pouchdb2.default(dbName, { auto_compaction: true });

    var dbUrl = authCreds ? PROTCOL + "://" + authCreds.username + ":" + authCreds.password + "@" + HOST + "/db" : PROTCOL + "://" + HOST + "/anonymous";

    var remoteDB = new _pouchdb2.default(dbUrl);

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
      var onSyncError = function onSyncError(err) {
        if (err && err.status === 401) {
          //Unauthorized user
          _RKunafa2.default.logout();
          location.reload(); //FIXME
        } else {
          cachedDBName = undefined;
        }
      };

      inSyncInterval = setInterval(function () {
        localDB.replicate.from(remoteDB, {
          selector: authCreds ? {
            _id: {
              $regex: "^" + authCreds.profileId
            }
          } : undefined
        }).on("error", onSyncError);
      }, 1000 * 60);

      outSyncHandler = localDB.replicate.to(remoteDB, {
        live: true,
        retry: false,
        selector: authCreds ? {
          _id: {
            $regex: "^" + authCreds.profileId
          }
        } : undefined
      }).on("error", onSyncError);
    }

    cachedDBName = dbName;
  };

  setInterval(createSyncHandler, 1000);

  var localSharedDB = new _pouchdb2.default("shared", { auto_compaction: true });
  var sharedDbUrl = PROTCOL + "://" + HOST + "/shared";
  var remoteSharedDB = new _pouchdb2.default(sharedDbUrl);

  var syncShared = function syncShared() {
    localSharedDB.replicate.from(remoteSharedDB);
  };

  syncShared();
  var syncSharedInterval = 1 * 1000 * 60;
  setInterval(syncShared, syncSharedInterval);
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _platform = __webpack_require__(18);

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var description = _platform2.default.description,
    layout = _platform2.default.layout,
    ua = _platform2.default.ua;
exports.default = {
  description: description,
  layout: layout,
  user_agent: ua,
  architecture: _platform2.default.os.architecture,
  osFamily: _platform2.default.os.family,
  device_unique_id: "browser_session"
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var routeToPath = function routeToPath(route) {
  return "/" + route.path.join("/");
};

var pathToRoute = function pathToRoute(path) {
  return {
    path: path.substr(1).split("/")
  };
};

exports.default = function (store, config) {
  return function (next) {
    var path = document.location.pathname;
    var route = pathToRoute(path);
    next(config.actionCreators.goTo(route.path, route.params));
    window.addEventListener("popstate", function (event) {
      var path = document.location.pathname;
      var route = pathToRoute(path);
      next(config.actionCreators.goTo(route.path, route.params));
    });
    return function (action) {
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
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLogout = exports.userLogin = exports.startLoading = exports.skipLogin = undefined;

var _RKunafa = __webpack_require__(0);

var _RKunafa2 = _interopRequireDefault(_RKunafa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var skipLogin = exports.skipLogin = function skipLogin() {
  return {
    type: "SKIP_LOGIN"
  };
};

var login = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(hostUrl, user) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(hostUrl + "/_session", {
              method: "POST",
              credentials: "include",
              body: JSON.stringify(user),
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              }
            });

          case 2:
            response = _context.sent;

            if (!(response.status == 200)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", response.json());

          case 7:
            console.log(response);
            throw new Error("Login Error");

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var fetchUser = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(hostUrl, user_id) {
    var url, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = hostUrl + "/_users/" + user_id;
            _context2.next = 3;
            return fetch(url, {
              method: "GET",
              credentials: "include",
              headers: {
                Accept: "application/json"
              }
            });

          case 3:
            response = _context2.sent;

            if (!(response.status == 200)) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", response.json());

          case 8:
            throw new Error("Request Error");

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function fetchUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var auth = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(name, password, hostUrl) {
    var session, userId;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return login(hostUrl, {
              name: name,
              password: password
            });

          case 2:
            session = _context3.sent;
            userId = "org.couchdb.user:" + session.name;
            _context3.next = 6;
            return fetchUser(hostUrl, userId);

          case 6:
            return _context3.abrupt("return", _context3.sent);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function auth(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

var startLoading = exports.startLoading = function startLoading() {
  return {
    type: "START_LOADING"
  };
};

var userLogin = exports.userLogin = function userLogin(name, password, event, _ref4) {
  var actionCreators = _ref4.actionCreators,
      HOST = _ref4.HOST,
      SSL = _ref4.SSL;

  var PROTCOL = SSL === "on" ? "https" : "http";
  return function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch) {
      var user;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch({
                type: "START_LOADING"
              });
              _context4.prev = 1;
              _context4.next = 4;
              return auth(name, password, PROTCOL + "://" + HOST);

            case 4:
              user = _context4.sent;

              _RKunafa2.default.login(name, password, user.profileId);
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
              _context4.next = 13;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](1);

              console.log(_context4.t0);

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[1, 10]]);
    }));

    return function (_x8) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var userLogout = exports.userLogout = function userLogout() {
  return function (dispatch) {
    dispatch({
      type: "START_LOADING"
    });
    _RKunafa2.default.logout();
    dispatch({
      type: "LOGOUT"
    });
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(23);

var _server2 = _interopRequireDefault(_server);

var _reactRedux = __webpack_require__(3);

var _kunafaClient = __webpack_require__(2);

var _selectors = __webpack_require__(6);

var selectors = _interopRequireWildcard(_selectors);

var _middlewares = __webpack_require__(9);

var _middlewares2 = _interopRequireDefault(_middlewares);

var _actionCreators = __webpack_require__(10);

var _actionCreators2 = _interopRequireDefault(_actionCreators);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var Main = this.props.main;
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: this.props.store },
        _react2.default.createElement(Main, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = function (name, MAIN, appConfig) {
  var config = Object.assign({
    getLocalDbUrl: function getLocalDbUrl(profileId) {
      return profileId || "anonymous";
    },
    ssr: true
  }, appConfig, {
    actionCreators: Object.assign({}, appConfig.actionCreators, _actionCreators2.default),
    selectors: Object.assign({}, appConfig.selectors, selectors),
    middlewares: [].concat(_toConsumableArray(appConfig.middlewares), _toConsumableArray(_middlewares2.default))
  });

  var AppStore = (0, _kunafaClient.createStore)(config);

  return {
    getHtml: function getHtml() {
      return _server2.default.renderToString(_react2.default.createElement(App, { store: AppStore, main: MAIN }));
    },
    store: AppStore
  };
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(11);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var R = __webpack_require__(8);

var Authorize = function Authorize(_ref) {
  var children = _ref.children,
      allow = _ref.allow,
      loggedIn = _ref.loggedIn,
      currentProfile = _ref.currentProfile;

  if (!loggedIn || !allow) {
    return null;
  }
  var roles = currentProfile.roles || ["user"];
  if (R.intersection(allow, roles).length > 0) {
    return children;
  }
  return null;
};

exports.default = (0, _connect2.default)(function (state, _ref2) {
  var selectors = _ref2.selectors;

  return {
    loggedIn: selectors.currentUserIdSelector(state) !== undefined,
    currentProfile: selectors.currentUserProfileSelector(state)
  };
})(Authorize);

/***/ })
/******/ ]);
});