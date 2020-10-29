const TransportationType = require('../models/transportationType')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getTransportationTypes = async (req, res) => {
   try {
     const transportationTypes = await TransportationType.find()
     res.json(transportationTypes)
    } catch (error) {
      res.status(500).json({error: error.message})
     }
}

module.exports = {
  getTransportationTypes
}