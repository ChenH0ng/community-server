import parser from 'express-session';
import connectMongoDB from 'connect-mongodb-session';

const MongoDBStore = connectMongoDB(parser);
const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/client',
    collection: 'Sessions',
});
const maxAge = 36000000;

export {
    parser,
    store,
    maxAge,
};