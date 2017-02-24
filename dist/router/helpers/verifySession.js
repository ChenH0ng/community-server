"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (req, res, next) {
    if (req.session.user) return next();
    res.send({ ce: 311 });
};