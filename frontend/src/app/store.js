import { configureStore } from '@reduxjs/toolkit'
import workoutSlice from '../features/workoutSlice'

export const store = configureStore({
  reducer: {
    workout: workoutSlice,
    
  },
})