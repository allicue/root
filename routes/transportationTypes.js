const { Router } = require('express')
const controllers = require('../controllers/transportationTypes')

const router = Router()

router.get('/transportationTypes', controllers.getTransportationTypes)

module.exports = router