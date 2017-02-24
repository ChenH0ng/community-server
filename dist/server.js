'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _socket = require('./socket');

var _socket2 = _interopRequireDefault(_socket);

var _db = require('./db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Path = require("path");


(0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _db.connect)('community');

                case 2:
                    (0, _socket2.default)({
                        port: 80,
                        router: require('./router').default,
                        publicPath: Path.resolve(__dirname, '../public')
                    });

                case 3:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined);
}))();