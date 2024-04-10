import express from 'express';
import workout from '../models/workoutModel.js';
import { createWorkout, deleteWorkout, getAllWorkout, getWorkout, updateWorkout } from '../controller/workoutController.js';
const router = express.Router();

router.get('/',getAllWorkout)


router.get('/:id',getWorkout)


router.post('/',createWorkout)

router.delete('/:id',deleteWorkout)

router.post('/:id',updateWorkout)

export default router;