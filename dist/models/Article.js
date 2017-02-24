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

var Article = function (_Script) {
    (0, _inherits3.default)(Article, _Script);

    function Article(_ref) {
        var _ref$title = _ref.title,
            title = _ref$title === undefined ? '' : _ref$title,
            _ref$inCommunity = _ref.inCommunity,
            inCommunity = _ref$inCommunity === undefined ? '' : _ref$inCommunity,
            rest = (0, _objectWithoutProperties3.default)(_ref, ['title', 'inCommunity']);
        (0, _classCallCheck3.default)(this, Article);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Article.__proto__ || (0, _getPrototypeOf2.default)(Article)).call(this, rest));

        _this.title = title;
        _this.inCommunity = inCommunity;
        return _this;
    }

    return Article;
}(_Script3.default);

exports.default = Article;