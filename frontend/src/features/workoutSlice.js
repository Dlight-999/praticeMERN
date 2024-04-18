import {createSlice ,createAsyncThunk, payloadAction} from "@reduxjs/toolkit";
import axios from "axios";

const baseURL ='http://localhost:5000/';
export const getWorkout = createAsyncThunk('workout/getWorkout', async()=>{
    const response = await axios.get(`${baseURL}api/workout`);
    return response.data;
});

export const addWorkout = createAsyncThunk('workout/addWorkout', async(data)=>{
    const response = await axios.post(`${baseURL}api/workout`,data);
    return response.data;
})
export const updateWorkout = createAsyncThunk('workout/updateWorkout', async({_id,data})=>{
    const response = await axios.put(`${baseURL}api/workout/${_id}`,{data});
    return response.data;
})
export const deleteWorkout = createAsyncThunk('workout/deleteWorkout', async(_id)=>{
    const response = await axios.post(`${baseURL}api/workout/${_id}`);
    return response.data;
})

const workoutSlice = createSlice({
    name:'workout',
    initialState:{
        workout:[],
        status:'idle',
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getWorkout.pending, (state)=>{
                state.status='loading';
            })
            .addCase(getWorkout.fulfilled,(state,action)=>{
                state.status='idle';
                state.workout=action.payload;
            })
            .addCase(getWorkout.rejected,(state,action)=>{
                state.status='error';
                state.error=action.error.message;
            })
            .addCase(addWorkout.fulfilled,(state,action)=>{
                state.workout.push(action.payload);
            })
            .addCase(updateWorkout.fulfilled,(state,action)=>{
                state.workout = state.workout.map((workout)=>
                workout._id ===action.payload._id? action.payload:workout
            )
            })

            .addCase(deleteWorkout.fulfilled,(state,action)=>{
                state.workout = state.workout.filter((workout)=>workout._id !==action.payload);
            })

    }
})

export default workoutSlice.reducer;

