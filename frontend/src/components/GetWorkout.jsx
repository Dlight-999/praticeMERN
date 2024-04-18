import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWorkout } from '../features/workoutSlice';

function GetWorkout() {
    const dispatch = useDispatch();
    const workout = useSelector((state)=>state.workout.workout);
    useEffect(()=>{
        dispatch(getWorkout());
    },[dispatch]);
    return (
        <>
            <div className="flex w-full h-full flex-col items-center py-5 mx-2 overflow-auto">
                {workout.map((workouts)=>(
                    <div className="card flex flex-col border-b-2 border-black bg-white rounded-lg shadow-xl shadow-gray-600 border text-black p-5 w-full my-2 mx-10 text-lg" key={workouts._id} >
                    <div className=''><h2 className='font-semibold'>Exercise:</h2>  {workouts.name}</div>
                    <div className='flex w-full justify-between items-start'>
                        <div className='flex justify-between w-full bg-gray-400 m-2 px-2 rounded-lg border-b-2 border-black shadow-md shadow-gray-600'><h2 className='font-semibold'>Sets:</h2> {workouts.sets}</div>
                        <div className='flex justify-between w-full bg-gray-400 m-2 px-2 rounded-lg border-b-2 border-black shadow-md shadow-gray-600'><h2 className='font-semibold'>Reps:</h2> {workouts.reps}</div>
                    </div>
                    
                </div>
                ))}
            </div>
        </>
      )
    }
export default GetWorkout