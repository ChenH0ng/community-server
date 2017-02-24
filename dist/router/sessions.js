'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require('express');

var _db = require('../db');

var _helpers = require('./helpers');

var _session = require('../session');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var users = new _db.Collection('users');
var router = new _express.Router();

router.post('/', function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
        var _req$body, username, password, _ref2, data, failed, e;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _req$body = req.body, username = _req$body.username, password = _req$body.password;
                        _context.next = 3;
                        return users.get({ username: username, password: password }, { nickname: 1, avatar: 1 });

                    case 3:
                        _ref2 = _context.sent;
                        data = _ref2.data;
                        failed = _ref2.failed;
                        e = _ref2.e;

                        if (e) res.json({ error: 400 });else if (failed) {
                            res.json({ error: 300 });
                        } else if (data) {
                            req.session.cookie.expires = new Date(Date.now() + _session.maxAge);
                            req.session.user = data;
                            res.json({ data: data });
                        }

                    case 8:
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

router.all('*', _helpers.verifySession);

router.get('/', function (req, res) {
    req.session.cookie.expires = new Date(Date.now() + _session.maxAge);
    res.json({ data: req.session.user });
});
router.delete('/', function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        return _context2.abrupt('return', _session.store.destroy(req.sessionID, function () {
                            return res.json({});
                        }));

                    case 1:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function (_x3, _x4) {
        return _ref3.apply(this, arguments);
    };
}());

exports.default = router;