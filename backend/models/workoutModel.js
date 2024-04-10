import mongoose from 'mongoose';

const workoutSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    sets:{
        type:Number,
        required:true,
    },
    reps:{
        type:Number,
        required: true,
    }
},
{timestamps:true}
)

const workout = mongoose.model('workout', workoutSchema);
export default workout;