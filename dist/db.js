'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Collection = exports.connect = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongodb = require('mongodb');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = void 0;

var connect = exports.connect = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(name) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _mongodb.MongoClient.connect('mongodb://localhost:27017/' + name);

                    case 2:
                        db = _context.sent;

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function connect(_x) {
        return _ref.apply(this, arguments);
    };
}();

var tryCatch = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(cb) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return cb();

                    case 3:
                        return _context2.abrupt('return', _context2.sent);

                    case 6:
                        _context2.prev = 6;
                        _context2.t0 = _context2['catch'](0);
                        return _context2.abrupt('return', { e: _context2.t0 });

                    case 9:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[0, 6]]);
    }));

    return function tryCatch(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var Collection = exports.Collection = function Collection(name) {
    var _this = this;

    (0, _classCallCheck3.default)(this, Collection);

    this.get = function (query, fields) {
        return tryCatch((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var data;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (typeof query === 'string') {
                                query = { _id: new _mongodb.ObjectID(query) };
                            }
                            _context3.next = 3;
                            return _this._collection.findOne(query, { fields: fields });

                        case 3:
                            data = _context3.sent;
                            return _context3.abrupt('return', {
                                data: data,
                                failed: data === null
                            });

                        case 5:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this);
        })));
    };

    this.getAll = function (query, _ref4) {
        var _ref4$skip = _ref4.skip,
            skip = _ref4$skip === undefined ? 0 : _ref4$skip,
            _ref4$limit = _ref4.limit,
            limit = _ref4$limit === undefined ? 10 : _ref4$limit,
            fields = _ref4.fields,
            _ref4$sort = _ref4.sort,
            sort = _ref4$sort === undefined ? { createdAt: 1 } : _ref4$sort;
        return tryCatch((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var data;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return _this._collection.find(query).skip(skip).limit(limit).sort(sort).project(fields).toArray();

                        case 2:
                            data = _context4.sent;
                            return _context4.abrupt('return', {
                                data: data,
                                failed: data.length === 0
                            });

                        case 4:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, _this);
        })));
    };

    this.create = function (doc) {
        return tryCatch((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return _this._collection.insertOne(doc);

                        case 2:
                            _context5.t0 = _context5.sent.result.n;
                            _context5.t1 = _context5.t0 !== 1;
                            return _context5.abrupt('return', {
                                failed: _context5.t1
                            });

                        case 5:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, _this);
        })));
    };

    this.update = function (_id, update) {
        return tryCatch((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            var query, key;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            query = {};

                            for (key in update) {
                                query[key] = { "$exists": true };
                            }
                            query._id = new _mongodb.ObjectID(_id);
                            _context6.next = 5;
                            return _this._collection.updateOne(query, update);

                        case 5:
                            _context6.t0 = _context6.sent.result.n;
                            _context6.t1 = _context6.t0 !== 1;
                            return _context6.abrupt('return', {
                                failed: _context6.t1
                            });

                        case 8:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, _this);
        })));
    };

    this.remove = function (_id) {
        return tryCatch((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return _this._collection.deleteOne({ _id: new _mongodb.ObjectID(_id) });

                        case 2:
                            _context7.t0 = _context7.sent.result.n;
                            _context7.t1 = _context7.t0 !== 1;
                            return _context7.abrupt('return', {
                                failed: _context7.t1
                            });

                        case 5:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, _this);
        })));
    };

    this.removeAll = function (query) {
        return tryCatch((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            _context8.next = 2;
                            return _this._collection.deleteMany(query);

                        case 2:
                            _context8.t0 = _context8.sent.result.n;
                            _context8.t1 = _context8.t0 === 0;
                            return _context8.abrupt('return', {
                                failed: _context8.t1
                            });

                        case 5:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, _this);
        })));
    };

    this._collection = db.collection(name);
};