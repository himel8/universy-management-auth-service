import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import userRoutes from './app/modules/user/users.route'

const app: Application = express()

// using cors
app.use(cors())

//parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Applicaton route
app.use('/api/v1/user', userRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
