import cors from 'cors'
import express, { Application } from 'express'

const app:Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// testing
app.get('/', (req, res) => {
  res.send('Hello World!')
})



export default app