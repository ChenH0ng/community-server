import Express, {Router,} from 'express';
import bodyParser from 'body-parser';
import {parser, store,} from './session';

export const app = Express();
app.set('trust proxy', 1);

export default ({port, router, publicPath,}) => {
    app.use(Express.static(publicPath));
    app.use(bodyParser.json());
    app.use(parser({
        secret: 'Gakk1mylove',
        resave: !!0,
        saveUninitialized: !!0,
        store,
    }));
    app.use(router);
    app.use((req, res) => {
        console.log(req.url);
        res.json({error: 301});
    });
    app.use((err, req, res, next) => {
        console.log(req.url);
        res.json({error: 400});
    });
    app.listen(process.env.PORT || port, () => {
        console.log(`server is listening at ${port}.`);
    });
}