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

const getTransportationType = async (req, res) => {
  try {
    const { id } = req.params
    const transportationType = await TransportationType.findById(id)
    if (transportationType) {
      return res.json(transportationType)
    }
    res.status(404).json({ message: 'Transportation Type not found!'})
   } catch (error) {
     res.status(500).json({error: error.message})
    }
}

const createTransportationType = async (req, res) => {
  try {
      const transportationType = new TransportationType(req.body)
      await transportationType.save()
      res.status(201).json(transportationType)
  } catch (error) {
      console.log(error)
      res.status(500).json({ error: error.message })
  }
}

const updateTransportationType = async (req, res) => {
  const { id } = req.params
  await TransportationType.findByIdAndUpdate(id, req.body, { new: true }, (error, transportationType) => {
      if (error) {
          return res.status(500).json({ error: error.message })
      }
      if (!transportationType) {
          return res.status(404).json(transportationType)
      }
      res.status(200).json(transportationType)
  })
}

const deleteTransportationType = async (req, res) => {
  try {
      const { id } = req.params
      const deleted = await TransportationType.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Transportation type deleted")
      }
      throw new Error("Transportation type not found")
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}



module.exports = {
  getTransportationTypes,
  getTransportationType,
  createTransportationType,
  updateTransportationType,
  deleteTransportationType
}