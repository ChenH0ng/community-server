'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = function () {
    (0, _createClass3.default)(User, [{
        key: 'synopsis',
        get: function get() {
            return {
                _id: this._id,
                nickname: this.nickname,
                avatar: this.avatar
            };
        }
    }]);

    function User(_ref) {
        var _id = _ref._id,
            _ref$username = _ref.username,
            username = _ref$username === undefined ? null : _ref$username,
            _ref$nickname = _ref.nickname,
            nickname = _ref$nickname === undefined ? '' : _ref$nickname,
            _ref$password = _ref.password,
            password = _ref$password === undefined ? null : _ref$password,
            _ref$avatar = _ref.avatar,
            avatar = _ref$avatar === undefined ? '' : _ref$avatar;
        (0, _classCallCheck3.default)(this, User);

        this._id = _id;
        this.username = username;
        this.nickname = nickname;
        this.password = password;
        this.avatar = avatar;
    }

    return User;
}();

exports.default = User;