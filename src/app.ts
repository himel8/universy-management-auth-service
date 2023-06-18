import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import { UserRoutes } from './app/modules/user/user.route'

const app: Application = express()

// using cors
app.use(cors())

//parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Applicaton route
app.use('/api/v1/user', UserRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// global error handler
app.use(globalErrorHandler)

export default app
