import { configureStore } from "@reduxjs/toolkit";
import workoutSlice from "../features/workoutSlice";

export const store = configureStore({
    reducer:{
        workout: workoutSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch