import React from 'react'
import Navbar from '../components/Navbar';
import AddWorkout from '../components/AddWorkout';
import GetWorkout from '../components/GetWorkout';
const Home: React.FC=()=>{
 
  return (
    <>
    <div className="flex flex-col w-full ">
    <Navbar/>
        <div className="h-screen w-full bg-gray-400">
            <div className="flex justify-evenly h-full">
               <AddWorkout/>
                <GetWorkout/>
            </div>
        </div>
        </div>
    </>
  )
}

export default Home