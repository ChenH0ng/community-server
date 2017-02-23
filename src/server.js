const Path = require("path");
import start from './socket';
import {connect,} from './db';

(async() => {
    await connect('community');
    start({
        port: 80,
        router: require('./router').default,
        publicPath: Path.resolve(__dirname, '../public'),
    });
})();