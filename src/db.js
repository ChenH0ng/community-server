import {MongoClient, ObjectID,} from 'mongodb';

let db;

export const connect = async name => {
    db = await MongoClient.connect('mongodb://localhost:27017/' + name);
};

const tryCatch = async cb => {
    try {
        return await cb();
    }
    catch (e) {
        return {e,};
    }
};

export class Collection {
    constructor(name) {
        this._collection = db.collection(name);
    }

    get = (query, fields) => tryCatch(async() => {
        if (typeof query === 'string') {
            query = {_id: new ObjectID(query)};
        }
        const data = await this._collection.findOne(query, {fields,});
        return {
            data,
            failed: data === null,
        };
    });

    getAll = (query, {skip = 0, limit = 10, fields, sort = {createdAt: 1},}) => tryCatch(async() => {
        const data = await this._collection.find(query)
            .skip(skip).limit(limit).sort(sort).project(fields).toArray();
        return {
            data,
            failed: data.length === 0,
        };
    });

    create = doc => tryCatch(async() => ({
        failed: (await this._collection.insertOne(doc)).result.n !== 1,
    }));

    update = (_id, update) => tryCatch(async() => {
        const query = {};
        for (let key in update) {
            query[key] = {"$exists": true};
        }
        query._id = new ObjectID(_id);
        return {
            failed: (await this._collection.updateOne(query, update)).result.n !== 1,
        };
    });

    remove = _id => tryCatch(async() => ({
        failed: (await this._collection.deleteOne({_id: new ObjectID(_id)})).result.n !== 1,
    }));

    removeAll = query => tryCatch(async() => ({
        failed: (await this._collection.deleteMany(query)).result.n === 0,
    }));
}