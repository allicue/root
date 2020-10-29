const db = require('../db/connection')
const TransportationType = require('../models/transportationType')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const transportationTypes =
    [
      {
        "title": "Biking" ,
        "imgURL": 'https://i.imgur.com/YptlxUK.png',
        "description" : "produces ZERO carbon emissions"
      },
    ]


  await TransportationType.insertMany(transportationTypes)
  console.log("Created transportationTypes!")
}
const run = async () => {
  await main()
    db.close()
}

run()

