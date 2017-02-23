import {Router,} from 'express';
import {Collection,} from '../db';
import {handleRest, verifySession,} from './helpers';
import {Comment,} from '../models';

const comments = new Collection('comments');
const router = new Router();

router.get('/', async(req, res) => handleRest(
    await comments.getAll({inArticle: req.query.inArticle}, {
        ...req.query,
        sort: {createdAt: 1},
    }),
    res,
    300,
    docs => docs.map(doc => new Comment(doc)),
));
router.get('/:id', async(req, res) => handleRest(await comments.get(req.params.id), res, 300, doc => new Comment(doc)));

router.all('*', verifySession);

router.post('/', async(req, res) => handleRest(await comments.create(new Comment(req.body)), res, 300));
router.put('/:id', async(req, res) => handleRest(await comments.update(req.params.id, req.body), res, 300));
router.delete('/:id', async(req, res) => handleRest(await comments.remove(req.params.id), res, 300));

export default router;

