'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _Script2 = require('./Script');

var _Script3 = _interopRequireDefault(_Script2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comment = function (_Script) {
    (0, _inherits3.default)(Comment, _Script);

    function Comment(_ref) {
        var _ref$inArticle = _ref.inArticle,
            inArticle = _ref$inArticle === undefined ? '' : _ref$inArticle,
            rest = (0, _objectWithoutProperties3.default)(_ref, ['inArticle']);
        (0, _classCallCheck3.default)(this, Comment);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Comment.__proto__ || (0, _getPrototypeOf2.default)(Comment)).call(this, rest));

        _this.inArticle = inArticle;
        return _this;
    }

    return Comment;
}(_Script3.default);

exports.default = Comment;