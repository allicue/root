const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const db = require('./db/connection')
const transportationTypeRoutes = require('./routes/transportationTypes')
const userRoutes = require('./routes/users')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.use('/api', transportationTypeRoutes)
app.use('/api', userRoutes)


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
});