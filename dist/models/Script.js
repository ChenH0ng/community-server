'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = function Info(_ref) {
    var _id = _ref._id,
        _ref$content = _ref.content,
        content = _ref$content === undefined ? '' : _ref$content,
        _ref$createdBy = _ref.createdBy,
        createdBy = _ref$createdBy === undefined ? '' : _ref$createdBy,
        _ref$createdAt = _ref.createdAt,
        createdAt = _ref$createdAt === undefined ? 0 : _ref$createdAt;
    (0, _classCallCheck3.default)(this, Info);

    this._id = _id;
    this.content = content;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
};

exports.default = Info;