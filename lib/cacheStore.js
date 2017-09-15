'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = require('store2');

var _store2 = _interopRequireDefault(_store);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

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
              return _context.abrupt('return', _ramda2.default.values(items));

            case 2:
            case 'end':
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