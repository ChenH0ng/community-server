'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Community = function Community(_ref) {
    var _id = _ref._id,
        _ref$name = _ref.name,
        name = _ref$name === undefined ? '' : _ref$name,
        _ref$avatar = _ref.avatar,
        avatar = _ref$avatar === undefined ? '' : _ref$avatar,
        nFollowers = _ref.nFollowers,
        nArticles = _ref.nArticles;
    (0, _classCallCheck3.default)(this, Community);

    this._id = _id;
    this.name = name;
    this.avatar = avatar;
    this.nFollowers = nFollowers;
    this.nArticles = nArticles;
};

exports.default = Community;