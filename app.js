
import express from 'express'
import router from './routes/tasks.js'
import connectDB from './db/connect.js'
import * as dotenv from 'dotenv'

// Environment Variables
dotenv.config()

// Express
const app = express()
const port = 3000

// middleware
app.use(express.static('./public'))
app.use(express.json())


// Routes
app.use('/api/v1/tasks', router)


async function start() {
  
  try {
    connectDB(process.env.MONGO_URI)
    app.listen(port, console.log('Server is listening'))

  } catch (err) {
    console.log(err)
  }

}


start()