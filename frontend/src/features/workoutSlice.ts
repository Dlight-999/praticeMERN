import { createAsyncThunk, createSlice, isRejectedWithValue, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import axios from "axios";
import { error } from "console";
const url = 'http://localhost:5000/';
interface IWorkout{
    _id:string,
    name: string,
    sets: string,
    reps: string,
}

interface WorkoutState{
    workouts: IWorkout[];
    loading: boolean;
    error: string|null;
}


const initialState: WorkoutState ={
    workouts:[],
    loading:false,
    error: null,
}
//create Actions
export const addWorkout =createAsyncThunk('addWorkout',async(data:IWorkout)=>{
   try{
    const response = await axios.post(`${url}api/workout`,data);
    alert('Workout Added Successfully');
   return response.data;
   }
   catch(error){
    return isRejectedWithValue(error);
   }
})


//reducer
export const workoutSlice = createSlice({
    name:"workouts",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(addWorkout.pending,(state)=>{
                state.loading= true;
            })
            .addCase(addWorkout.fulfilled,(state,action:PayloadAction<any>)=>{
                state.loading= false;
                state.workouts.push(action.payload);
            })
            .addCase(addWorkout.rejected,(state,action: PayloadAction<any>)=>{
                state.loading=false;
                state.workouts=action.payload;
            })
    }
    ,
})

export default workoutSlice.reducer;