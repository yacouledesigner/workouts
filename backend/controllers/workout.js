const Workout = require('../models/Workout')

// post 

const addWorkout = async (req,res)=>{
    const body = new Workout(req.body)
    const data = await body.save()
    res.status(200).json(data)
}

// getAll
const getWorkout = async (req,res)=>{
    const data = await Workout.find()
    res.status(200).json(data)
}

// getOneWorkout
const getOneWorkout = async (req,res)=>{
    
    const data = await Workout.findById({_id: req.params.id})
    if (!data) {
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(data)
}
// delete 
const deleteWork = async (req,res)=>{
    const data = await Workout.findByIdAndDelete({_id: req.params.id})
    
    if (!data) {
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(data)
}

const updateWorkout = async (req,res)=>{
    const data = await Workout.findByIdAndUpdate({_id: req.params.id}, req.body)
    
    if (!data) {
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(data)
}



module.exports = {addWorkout, getWorkout, getOneWorkout,deleteWork,updateWorkout}