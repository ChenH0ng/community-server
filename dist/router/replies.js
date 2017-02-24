'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require('express');

var _db = require('../db');

var _helpers = require('./helpers');

var _models = require('../models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var replies = new _db.Collection('replies');
var router = new _express.Router();

router.get('/', function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.t0 = _helpers.handleRest;
                        _context.next = 3;
                        return replies.getAll({ inComment: req.query.inComment }, (0, _extends3.default)({}, req.query, {
                            sort: { createdAt: 1 }
                        }));

                    case 3:
                        _context.t1 = _context.sent;
                        _context.t2 = res;

                        _context.t3 = function (docs) {
                            return docs.map(function (doc) {
                                return new _models.Reply(doc);
                            });
                        };

                        return _context.abrupt('return', (0, _context.t0)(_context.t1, _context.t2, 300, _context.t3));

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());
router.get('/:id', function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.t0 = _helpers.handleRest;
                        _context2.next = 3;
                        return replies.get(req.params.id);

                    case 3:
                        _context2.t1 = _context2.sent;
                        _context2.t2 = res;

                        _context2.t3 = function (doc) {
                            return new _models.Reply(doc);
                        };

                        return _context2.abrupt('return', (0, _context2.t0)(_context2.t1, _context2.t2, 300, _context2.t3));

                    case 7:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}());

router.all('*', _helpers.verifySession);

router.post('/', function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(req, res) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.t0 = _helpers.handleRest;
                        _context3.next = 3;
                        return replies.create(new _models.Reply(req.body));

                    case 3:
                        _context3.t1 = _context3.sent;
                        _context3.t2 = res;
                        return _context3.abrupt('return', (0, _context3.t0)(_context3.t1, _context3.t2, 300));

                    case 6:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}());
router.put('/:id', function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(req, res) {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.t0 = _helpers.handleRest;
                        _context4.next = 3;
                        return replies.update(req.params.id, req.body);

                    case 3:
                        _context4.t1 = _context4.sent;
                        _context4.t2 = res;
                        return _context4.abrupt('return', (0, _context4.t0)(_context4.t1, _context4.t2, 300));

                    case 6:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}());
router.delete('/:id', function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(req, res) {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.t0 = _helpers.handleRest;
                        _context5.next = 3;
                        return replies.remove(req.params.id);

                    case 3:
                        _context5.t1 = _context5.sent;
                        _context5.t2 = res;
                        return _context5.abrupt('return', (0, _context5.t0)(_context5.t1, _context5.t2, 300));

                    case 6:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined);
    }));

    return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}());

exports.default = router;