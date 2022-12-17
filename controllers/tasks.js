


import { TaskModel } from "../models/Task.js"
import { asyncWrapper } from "../middleware/async.js" 




export const getAllTasks = asyncWrapper( async (req, res) => {
  const tasks = await TaskModel.find({})
  res.status(200).json({ tasks })
})



export const createTask = asyncWrapper( async (req, res) => {
  const task = await TaskModel.create(req.body)
  res.status(201).json({ task })
})



export const getTask = asyncWrapper( async (req, res) => {
  const id = req.params.id
  const task = await TaskModel.findOne({_id : id})

  if (!task)  return res.status(404).json({ msg : `No task found with id: ${id}`})

  res.status(200).json({ task })
})



export const updateTask = asyncWrapper( async (req, res) => {
  const { id } = req.params
  const task = await TaskModel.findByIdAndUpdate( { _id: id }, req.body, { new : true, runValidators : true })

  if(!task) return res.status(404).json({ msg : `No task found with id: ${id}` })

  res.status(200).json({ task })
})



export const deleteTask = asyncWrapper( async (req, res) => {
    const { id } = req.params
    const task = await TaskModel.findOneAndDelete({_id : id })

    if (!task) return res.status(404).json({ msg : `No task found with id: ${id}`})

    res.status(200).json({ task })
})

