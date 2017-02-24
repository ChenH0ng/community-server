import {Router,} from 'express';
import articles from './articles';
import sessions from './sessions';
import comments from './comments';
import replies from './replies';
import users from './usesrs';
import communities from './communities';

const router = new Router();
router.use('/api/v0.1.0/articles', articles);
router.use('/api/v0.1.0/sessions', sessions);
router.use('/api/v0.1.0/comments', comments);
router.use('/api/v0.1.0/replies', replies);
router.use('/api/v0.1.0/users', users);
router.use('/api/v0.1.0/communities', communities);

export default router;