import {Router,} from 'express';
import {Collection,} from '../db';
import {verifySession,} from './helpers';
import {maxAge, store,} from '../session';

const users = new Collection('users');
const router = new Router();

router.post('/', async(req, res) => {
    const {username, password,}=req.body;
    const {data, failed, e,}=await users.get({username, password,}, {nickname: 1, avatar: 1});
    if (e) res.json({error: 400});
    else if (failed) {
        res.json({error: 300});
    }
    else if (data) {
        req.session.cookie.expires = new Date(Date.now() + maxAge);
        req.session.user = data;
        res.json({data});
    }
});

router.all('*', verifySession);

router.get('/', (req, res) => {
    req.session.cookie.expires = new Date(Date.now() + maxAge);
    res.json({data: req.session.user});
});
router.delete('/', async(req, res) => store.destroy(req.sessionID, () => res.json({})));

export default router;