"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _platform = require("platform");

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