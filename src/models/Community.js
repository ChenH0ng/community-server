export default class Community {
    constructor({_id, name = '', avatar = '', nFollowers, nArticles,}) {
        this._id = _id;
        this.name = name;
        this.avatar = avatar;
        this.nFollowers = nFollowers;
        this.nArticles = nArticles;
    }
}