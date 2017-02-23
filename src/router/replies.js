import {Router,} from 'express';
import {Collection,} from '../db';
import {handleRest, verifySession,} from './helpers';
import {Reply,} from '../models';

const replies = new Collection('replies');
const router = new Router();

router.get('/', async(req, res) => handleRest(
    await replies.getAll({inComment: req.query.inComment}, {
        ...req.query,
        sort: {createdAt: 1},
    }),
    res,
    300,
    docs => docs.map(doc => new Reply(doc)),
));
router.get('/:id', async(req, res) => handleRest(await replies.get(req.params.id), res, 300, doc => new Reply(doc)));

router.all('*', verifySession);

router.post('/', async(req, res) => handleRest(await replies.create(new Reply(req.body)), res, 300));
router.put('/:id', async(req, res) => handleRest(await replies.update(req.params.id, req.body), res, 300));
router.delete('/:id', async(req, res) => handleRest(await replies.remove(req.params.id), res, 300));

export default router;


