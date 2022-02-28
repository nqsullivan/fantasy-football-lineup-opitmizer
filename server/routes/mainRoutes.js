import express from 'express';

import { getTeam, createPlayer, editPlayer, updatePlayer } from '../controllers/routes.js';

const router = express.Router();

router.get('/', getTeam);
router.post('/', createPlayer);
router.patch('/', editPlayer);
router.patch('/:id', updatePlayer);

export default router;