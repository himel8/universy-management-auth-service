import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import Status from 'http-status'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import routes from './app/routes'

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

// handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(Status.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  })
  next()
})

export default app
