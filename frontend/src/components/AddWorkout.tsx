import axios from 'axios';
import React, { useState } from 'react'

interface IWorkout{
    name: string;
    sets: string;
    reps:string;
}
function AddWorkout() {
    const[workout, setWorkout]=useState<IWorkout>({
        name:'',
        sets:'',
        reps:'',
    });
    const[err,setErr]= useState<string>('');
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const{name, value} = e.target;
        setWorkout(prevState =>({
            ...prevState,
            [name]:value
        }))
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/api/workout', workout);
            setWorkout({
                name:'',
                sets:'',
                reps:''
            })

            alert('Workout Added Successfully');
        }
        catch(error:any){
            console.error('Error adding:',error);
            setErr(error.response.data.error)
        }
    }
  return (
   <>
    <div className="form w-full flex flex-col justify-center items-center">
                   <div className='bg-black rounded-lg text-white w-auto p-5'> 
                    Add Workout
                    <form onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <div className='flex flex-col'>
                            <label htmlFor="">exercise</label>
                            <input type="text" name="name" id="name" className='rounded-md h-12 text-black p-2' value={workout.name} onChange={handleInputChange}/>
                        </div>
                        <div className='flex my-6 justify-between gap-5'>
                           <div className='flex flex-col'>
                           <label htmlFor="">Sets</label>
                            <input type="number" name="sets" id="sets" className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-md h-12 text-black p-2' value={workout.sets} onChange={handleInputChange}  min='0'/>
                           </div>
                           <div className='flex flex-col'>
                           <label htmlFor="">Reps</label>
                            <input type="number" name="reps" id="reps" className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-md h-12 text-black p-2' value={workout.reps} onChange={handleInputChange}  min='0'/>
                           </div>
                        </div>
                        {err && <div>{err}</div>}
                        <button className='my-5 bg-sky-600 rounded-md p-2 hover:bg-indigo-800 text-lg font-bold' type="submit">Add</button>

                    </div>
                    </form>
                </div>
                </div>
   </>
  )
}

export default AddWorkout