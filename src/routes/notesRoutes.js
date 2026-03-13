import { Router } from 'express';
import {
  createNote,
  getNotes,
  getNotesById,
} from '../controllers/notesController.js';

const router = Router();

router.get('/notes', getNotes);

router.get('/notes/:noteId', getNotesById);

router.post('/notes', createNote);

export default router;
