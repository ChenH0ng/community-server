import {Router,} from 'express';
import {Collection,} from '../db';
import {handleRest, verifySession,} from './helpers';
import {Community,} from '../models';

const articles = new Collection('articles');
const router = new Router();

router.get('/', async(req, res) => handleRest(
    await articles.getAll(null, {
        ...req.query,
        sort: {createdAt: -1},
    }),
    res,
    300,
    docs => docs.map(doc => new Community(doc)),
));
router.get('/:id', async(req, res) => handleRest(await articles.get(req.params.id), res, 300, doc => new Community(doc)));

router.all('*', verifySession);
router.post('/', async(req, res) => handleRest(await articles.create(new Community(req.body)), res, 300));

export default router;

