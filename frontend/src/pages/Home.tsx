import React, { ChangeEvent, useState } from 'react'
import Navbar from '../components/Navbar';

const Home: React.FC=()=>{
  
  return (
    <>
    <div className="flex flex-col w-full ">
    <Navbar/>
        <div className="h-screen w-full bg-gray-400">
            <div className="flex justify-evenly h-full">
                <div className="form w-full flex flex-col justify-center items-center">
                   <div className='bg-black rounded-lg text-white w-auto p-5'> 
                    Add Workout
                    <div className='flex flex-col'>
                        <div className='flex flex-col'>
                            <label htmlFor="">Exercise</label>
                            <input type="text" name="" id="" className='rounded-md h-12 text-black p-2' />
                        </div>
                        <div className='flex my-6 justify-between gap-5'>
                           <div className='flex flex-col'>
                           <label htmlFor="">Sets</label>
                            <input type="text" name="" id="" className='rounded-md h-12 text-black p-2'/>
                           </div>
                           <div className='flex flex-col'>
                           <label htmlFor="">Reps</label>
                            <input type="text" name="" id="" className='rounded-md h-12 text-black p-2'/>
                           </div>
                        </div>
                        <button className='my-5 bg-sky-600 rounded-md p-2 hover:bg-indigo-800 text-lg font-bold' type="submit">Add</button>

                    </div>
                </div>
                </div>
                <div className="flex w-full flex-col items-center py-5">
                    <h2 className='text-lg font-semibold'>List</h2>
                    <table className='table-auto w-full'>
                        <thead>
                            <tr>
                                <th>S.N.</th>
                                <th>Exercise</th>
                                <th>Sets x Reps</th>
                             </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr>
                                <td>1</td>
                                <td>Handstand Pushup</td>
                                <td>3x5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Home