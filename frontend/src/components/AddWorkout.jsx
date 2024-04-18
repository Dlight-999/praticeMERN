import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import {addWorkout} from '../features/workoutSlice'
function AddWorkout() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        sets:'' ,
        reps: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(addWorkout(formData));
            // Reset form data after successful submission
            setFormData({ name: '', sets: '', reps: '' });
        } catch (error) {
            console.error('Error adding workout:', error);
        }
    };
    

    return (
        <>
            <div className="form w-full flex flex-col justify-center items-center">
                <div className='bg-black rounded-lg text-white w-auto p-5'>
                    Add Workout
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col'>
                            <div className='flex flex-col'>
                                <label htmlFor="name">Exercise</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className='rounded-md h-12 text-black p-2'
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex my-6 justify-between gap-5'>
                                <div className='flex flex-col'>
                                   <label htmlFor="sets">Sets</label>
                                    <input
                                        type="number"
                                        name="sets"
                                        id="sets"
                                        className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-md h-12 text-black p-2' value={formData.sets}
                                        min='0'
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="reps">Reps</label>
                                    <input
                                        type="number"
                                        name="reps"
                                        id="reps"
                                        className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-md h-12 text-black p-2'
                                        value={formData.reps}
                                        min='0'
                                        onChange={handleChange}
                                    />
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

export default AddWorkout;
