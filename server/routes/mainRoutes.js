import express from 'express';

import {getTeam, createPlayer, updatePlayer, deletePlayer, makeStarter, makeBench} from '../controllers/routes.js';

const router = express.Router();

router.get('/', getTeam);
router.post('/', createPlayer);
router.patch('/:id', updatePlayer);
router.delete('/:id', deletePlayer);
router.patch('/:id/makeStarter', makeStarter);
router.patch('/:id/makeBench', makeBench);

export default router;