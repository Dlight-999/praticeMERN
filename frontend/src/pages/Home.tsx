import React, { ChangeEvent, useState } from 'react'
interface Workout{
    exercise: string;
    setsReps: string;
}
const Home: React.FC=()=>{
    const[workout, setWorkout] = useState<Workout>({
        exercise:'',
        setsReps:'',
    });

        const handleInputChange =(e:ChangeEvent<HTMLInputElement>)=>{
            const{name, value} = e.target;
            setWorkout({...workout,[name]: value})

        }
  
  return (
    <>
        <div className="h-screen bg-gray-400">
            <div className="flex justify-evenly h-full">
                <div className="form w-full flex flex-col justify-center items-center">
                   <div className='bg-black rounded-lg text-white w-96 p-5'> 
                    Add Workout
                    <div className='flex flex-col'>
                        <div className='flex flex-col'>
                            <label htmlFor="">Exercise</label>
                            <input type="text" name="" id="" className='rounded-md h-12 text-black p-2' onChange={handleInputChange} />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Sets x Reps</label>
                            <input type="text" name="" id="" className='rounded-md h-12 text-black p-2' onChange={handleInputChange}/>
                        </div>
                        <button className='my-5 bg-indigo-900 rounded-md p-2' type="submit">Add</button>

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
    </>
  )
}

export default Home