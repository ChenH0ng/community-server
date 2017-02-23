import {Router,} from 'express';
import articles from './articles';
import sessions from './sessions';
import comments from './comments';
import replies from './replies';
import users from './usesrs';

const router = new Router();
router.use('/articles', articles);
router.use('/sessions', sessions);
router.use('/comments', comments);
router.use('/replies', replies);
router.use('/users', users);

export default router;