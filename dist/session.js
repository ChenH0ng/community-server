'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.maxAge = exports.store = exports.parser = undefined;

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _connectMongodbSession = require('connect-mongodb-session');

var _connectMongodbSession2 = _interopRequireDefault(_connectMongodbSession);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MongoDBStore = (0, _connectMongodbSession2.default)(_expressSession2.default);
var store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/client',
    collection: 'Sessions'
});
var maxAge = 36000000;

exports.parser = _expressSession2.default;
exports.store = store;
exports.maxAge = maxAge;