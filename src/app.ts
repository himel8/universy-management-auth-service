import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import routes from './routes'

const app: Application = express()

// using cors
app.use(cors())

//parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Applicaton route
app.use('/api/v1', routes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// global error handler
app.use(globalErrorHandler)

export default app
