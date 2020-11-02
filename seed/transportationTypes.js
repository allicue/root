const db = require('../db/connection')
const TransportationType = require('../models/transportationType')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const transportationTypes =
    [
      {
        "title": "Walking",
        "imgURL": 'https://i.imgur.com/5MAjX53.jpeg',
        "description": "Produces 0 carbon emissions."
      },
      {
        "title": "Biking",
        "imgURL": 'https://i.imgur.com/t6MSCFD.jpeg',
        "description": "Produces 0 carbon emissions."
      },
      {
        "title": "Electric Car",
        "imgURL": 'https://i.imgur.com/K9O1PdG.jpg',
        "description": "Produces 0 tailpipe emissions, but power plant may produce CO2."
      },
      {
        "title": "Public Transportation",
        "imgURL": 'https://i.imgur.com/F0pZs9o.jpg',
        "description": "Produces 0.17 kg of CO2 per passenger per mile on average."
      },
      {
        "title": "Ride Share",
        "imgURL": 'https://i.imgur.com/aiAEKw7.jpg',
        "description": "Produces 0.18 kg of CO2 per passenger per mile on average."
      },
      {
        "title": "Hybrid Car",
        "imgURL": 'https://i.imgur.com/yVlBohq.jpg',
        "description": "Produces 0.19 kg of CO2 per passenger per mile on average."
      },
      {
        "title": "Gas Car",
        "imgURL": 'https://i.imgur.com/IpPA0gf.jpg',
        "description": "Produces 0.36 kg of CO2 per passenger per mile on average."
      },
      {
        "title": "Large Truck/SUV",
        "imgURL": 'https://i.imgur.com/qJ1pc11.jpg',
        "description": "Produces 10.17 kg of CO2 per passenger per mile on average."
      },
      {
        "title": "Airplane",
        "imgURL": 'https://i.imgur.com/5ktpsRP.png',
        "description": "Produces 0.24 kg of CO2 per passenger per mile on average (ranking factors in more passengers and more miles on average than other methods)."
      }
    ]


  await TransportationType.insertMany(transportationTypes)
  console.log("Created transportationTypes!")
}
const run = async () => {
  await main()
  db.close()
}

run()

