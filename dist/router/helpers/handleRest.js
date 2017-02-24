"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref, res, fail, map) {
    var failed = _ref.failed,
        data = _ref.data,
        e = _ref.e;

    if (e) res.json({ error: 400 });else if (failed) {
        console.log(fail);
        res.json({ error: fail });
    } else if (data) {
        res.json({ data: map(data) });
    } else {
        res.json({});
    }
};