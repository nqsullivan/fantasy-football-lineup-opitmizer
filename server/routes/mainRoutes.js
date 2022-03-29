import express from 'express';

import {getTeam, createPlayer, updatePlayer, deletePlayer, makeStarter, makeBench} from '../controllers/team.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getTeam);
router.post('/', auth, createPlayer);
router.patch('/:id', auth, updatePlayer);
router.delete('/:id', auth, deletePlayer);
router.patch('/:id/makeStarter', auth, makeStarter);
router.patch('/:id/makeBench', auth, makeBench);

export default router;