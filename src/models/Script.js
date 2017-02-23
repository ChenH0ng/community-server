export default class Info {
    constructor({_id, content = '', createdBy = '', createdAt = 0,}) {
        this._id = _id;
        this.content = content;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
    }
}