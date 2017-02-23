import {Router,} from 'express';
import {Collection,} from '../db';
import {handleRest, verifySession,} from './helpers';
import {User,} from '../models';
//暂时未做安全性检验
const users = new Collection('users');
const router = new Router();

router.post('/', async(req, res) => handleRest(await users.create(new User(req.body)), res, 300));

router.all('*', verifySession);

router.get('/:id', async(req, res) => handleRest(await users.get(req.params.id), res, 300, doc => (new User(doc)).synopsis));
router.put('/:id', async(req, res) => handleRest(await users.update(req.params.id, req.body), res, 300));

export default router;

