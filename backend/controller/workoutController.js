import mongoose from "mongoose";
import workout from "../models/workoutModel.js";
//get all
const getAllWorkout = async(req,res)=>{
   try{
    const workouts = await workout.find({}).sort({createdAt: -1});
    res.status(200).json(workouts);
   }
   catch(error){
    res.status(400).json({error:error.message});
   }

}

//get one workout
const getWorkout = async(req,res)=>{
    const{id} = req.params
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({error:'No such workout'})
        }
        const aWorkout= await workout.findById(id)
        
        if(!aWorkout){
            return res.status(404).json({error:'No such workout'})
        }
        res.status(200).json(aWorkout);
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}


// create new workout
const createWorkout = async(req,res)=>{
    const{name,sets,reps} = req.body
    try{
        const Workout = await workout.create({name,sets,reps});
        res.status(200).json(Workout);
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}


//delete workout
const deleteWorkout = async(req,res)=>{
    const{id} = req.params;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'Cant find workout to delete'})
        }
        const Workout = await workout.findOneAndDelete({_id:id})
        if(!Workout){
            return res.status(404).json({error:'Cant find workout to delete'})
        }
        res.status(200).json({error:'Deleted Successfully'});
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

//update workout
const updateWorkout = async(req,res)=>{
    const{id} = req.params;
    try{
        if(!mongoose.Types.ObjectId.isValid){
            return res.status(404).json({error:'Cant find workout to update'})
        }
        const Workout = await workout.findOneAndUpdate({id},{
            ...req.body
        });
        if(!Workout){
            return res.status(404).json({error:'Cant find workout to update'})
        }
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}
export {createWorkout,getAllWorkout,getWorkout,deleteWorkout,updateWorkout};