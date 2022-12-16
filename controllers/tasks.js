


import { TaskModel } from "../models/Task.js"




export const getAllTasks = async (req, res) => {

  try {
    const tasks = await TaskModel.find({})
    res.status(200).json({ tasks })

  } catch (error) {
    res.status(500).json({ msg : error })    
  }
}



export const createTask = async (req, res) => {

  try {
    const task = await TaskModel.create(req.body)
    res.status(201).json({ task })
    
  } catch (error) {
    res.status(500).json({ msg : error })
  }
}



export const getTask = async (req, res) => {

  try {
    const id = req.params.id
    const task = await TaskModel.findOne({_id : id})

    if (!task) {
      return res.status(404).json({ msg : `No task found with id: ${id}`})
    }

    res.status(200).json({ task })
    
  } catch (error) {
    res.status(500).json({ msg : error })
  }
}



export const updateTask = async (req, res) => {

  try {
    const { id } = req.params
    const task = await TaskModel.findByIdAndUpdate(
      { _id: id }, 
      req.body,
      { new : true, runValidators : true }
    )

    if(!task) {
      return res.status(404).json({ msg : `No task found with id: ${id}` })
    }

    res.status(200).json({ task })
    
  } catch (error) {
    res.status(500).json({ msg : error })
  }
}



export const deleteTask = async (req, res) => {

  try {
    const { id } = req.params
    const task = await TaskModel.findOneAndDelete({_id : id })

    if (!task) {
      return res.status(404).json({ msg : `No task found with id: ${id}`})
    }

    res.status(200).json({ task })

  } catch (error) {
    res.status(500).json({ msg : error })
  }

}

