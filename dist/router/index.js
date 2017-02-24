'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _articles = require('./articles');

var _articles2 = _interopRequireDefault(_articles);

var _sessions = require('./sessions');

var _sessions2 = _interopRequireDefault(_sessions);

var _comments = require('./comments');

var _comments2 = _interopRequireDefault(_comments);

var _replies = require('./replies');

var _replies2 = _interopRequireDefault(_replies);

var _usesrs = require('./usesrs');

var _usesrs2 = _interopRequireDefault(_usesrs);

var _communities = require('./communities');

var _communities2 = _interopRequireDefault(_communities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();
router.use('/api/v0.1.0/articles', _articles2.default);
router.use('/api/v0.1.0/sessions', _sessions2.default);
router.use('/api/v0.1.0/comments', _comments2.default);
router.use('/api/v0.1.0/replies', _replies2.default);
router.use('/api/v0.1.0/users', _usesrs2.default);
router.use('/api/v0.1.0/communities', _communities2.default);

exports.default = router;