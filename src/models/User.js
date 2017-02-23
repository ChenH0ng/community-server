export default class User {
    constructor({_id, username = null, nickname = '', password = null, avatar = '',}) {
        this._id = _id;
        this.username = username;
        this.nickname = nickname;
        this.password = password;
        this.avatar = avatar;
        this.synopsis = {
            _id,
            nickname,
            avatar,
        };
    }
}