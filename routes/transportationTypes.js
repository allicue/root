const { Router } = require('express')
const controllers = require('../controllers/transportationTypes')

const router = Router()

router.get('/transportationTypes', controllers.getTransportationTypes)
router.get('/transportationTypes/:id', controllers.getTransportationType)
router.post('/transportationTypes', controllers.createTransportationType)
router.put('/transportationTypes/:id', controllers.updateTransportationType)
router.delete('/transportationTypes/:id', controllers.deleteTransportationType)

module.exports = router