export default class User {
    get synopsis() {
        return {
            _id: this._id,
            nickname: this.nickname,
            avatar: this.avatar,
        }
    }

    constructor({_id, username = null, nickname = '', password = null, avatar = '',}) {
        this._id = _id;
        this.username = username;
        this.nickname = nickname;
        this.password = password;
        this.avatar = avatar;
    }
}