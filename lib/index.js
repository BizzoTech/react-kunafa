'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = exports.createApp = undefined;

var _createApp = require('./createApp');

var _createApp2 = _interopRequireDefault(_createApp);

var _kunafaClient = require('kunafa-client');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createApp = _createApp2.default;
exports.connect = _kunafaClient.connect;