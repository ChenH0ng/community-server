'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _session = require('./session');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = exports.app = (0, _express2.default)();
app.set('trust proxy', 1);

exports.default = function (_ref) {
    var port = _ref.port,
        router = _ref.router,
        publicPath = _ref.publicPath;

    app.use(_express2.default.static(publicPath));
    app.use(_bodyParser2.default.json());
    app.use((0, _session.parser)({
        secret: 'Gakk1mylove',
        resave: !!0,
        saveUninitialized: !!0,
        store: _session.store
    }));
    app.use(router);
    app.use(function (req, res) {
        console.log(req.url);
        res.json({ error: 301 });
    });
    app.use(function (err, req, res, next) {
        console.log(req.url);
        res.json({ error: 400 });
    });
    app.listen(process.env.PORT || port, function () {
        console.log('server is listening at ' + port + '.');
    });
};