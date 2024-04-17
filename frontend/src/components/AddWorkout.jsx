import React from 'react'

function AddWorkout() {
    return (
        <>
         <div className="form w-full flex flex-col justify-center items-center">
                        <div className='bg-black rounded-lg text-white w-auto p-5'> 
                         Add Workout
                         <form>
                         <div className='flex flex-col'>
                             <div className='flex flex-col'>
                                 <label htmlFor="">exercise</label>
                                 <input type="text" name="name" id="name" className='rounded-md h-12 text-black p-2' />
                             </div>
                             <div className='flex my-6 justify-between gap-5'>
                                <div className='flex flex-col'>
                                <label htmlFor="">Sets</label>
                                 <input type="number" name="sets" id="sets" className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-md h-12 text-black p-2'   min='0'/>
                                </div>
                                <div className='flex flex-col'>
                                <label htmlFor="">Reps</label>
                                 <input type="number" name="reps" id="reps" className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-md h-12 text-black p-2'   min='0'/>
                                </div>
                             </div>

                             <button className='my-5 bg-sky-600 rounded-md p-2 hover:bg-indigo-800 text-lg font-bold' type="submit">Add</button>
     
                         </div>
                         </form>
                     </div>
                     </div>
        </>
       )
     }

export default AddWorkout