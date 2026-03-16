import { Router } from 'express';
import {
  createNote,
  deleteNote,
  updateNote,
  getAllNotes,
  getNoteById,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import { noteIdSchema } from '../validations/notesValidation.js';

const router = Router();

router.get('/notes', getAllNotes);

router.get('/notes/:noteId',celebrate(noteIdSchema), getNoteById);

router.post('/notes', createNote);

router.delete('/notes/:noteId',celebrate(noteIdSchema), deleteNote);

router.patch('/notes/:noteId',celebrate(noteIdSchema), updateNote);

export default router;
