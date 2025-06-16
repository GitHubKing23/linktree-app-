import { Router } from 'express';
import {
  createLink,
  getLinks,
  updateLink,
  deleteLink,
  getPublicLinks
} from '../controllers/linkController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

router.post('/', authMiddleware, createLink);
router.get('/', authMiddleware, getLinks);
router.put('/:id', authMiddleware, updateLink);
router.delete('/:id', authMiddleware, deleteLink);
router.get('/user/:username', getPublicLinks);

export default router;
