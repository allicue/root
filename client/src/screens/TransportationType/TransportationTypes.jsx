import React, { useEffect, useState } from 'react'
import TransportationType from '../../components/TransportationType/TransportationType'
import './TransportationTypes.css'
import { getTransportationTypes } from '../../services/transportationTypes'

export default function TransportationTypes() {
  const [transportationTypes, setTransportationTypes] = useState([])


  useEffect(() => {
    const getData = async () => {
      const types = await getTransportationTypes()
      console.log(types)
      setTransportationTypes(types)
    }
    getData()
  }, [])

  const TYPES = transportationTypes.map(item =>
    <TransportationType title={item.title.toUpperCase()} imgURL={item.imgURL} description={item.description} />
  )

  return (
    <div className="Layout-placeholder">
      <div className="transportation-types-main">
        <div className="title-list">
          <div className="transportation-types-parent">
            <h1>CLIMATE IMPACT BY TRANSPORTATION TYPE</h1>
            <div className="transportation-types">{TYPES}</div>
          </div>
        </div>
        <div className="green-news">
          <div className="green-news-child">
            <div className="green-news-title" id="illinois">
              <h2>GREEN NEWS</h2>
              <h4>A GREEN NEW DEAL FOR ILLINOIS TRANSPORTATION</h4>
            </div>
            <small>Last week while forest fires were raging in California, Governor Gavin Newsom issued an executive order declaring a goal of eliminating fossil fuels from the transportation sector.<br></br>
                    The order called for ending all sales of fossil fuel-powered vehicles by 2035 and calls on various California state agencies to formulate strategies and regulations to create a “just” transition away from fossil fuel reliance.</small>
          </div>
          <div className="green-news-child">
            <div className="green-news-title" id="amazon">

              <h2>GREEN NEWS</h2>
              <h4>AMAZON UNVEILS ITS NEW ELECTRIC DELIVERY VANS BUILT BY RIVIAN</h4>
            </div>
            <small>Amazon unveiled its first all-electric delivery van on Thursday. The vehicle, built by EV startup Rivian, will come with state-of-the-art technology, like sensing equipment and an advanced driver-assist system. <br></br>
                    The e-commerce giant says it expects to have 10,000 vans on the road making deliveries “as early as 2022,” with a total fleet of 100,000 vehicles expected by 2030.</small>
          </div>
        </div>
      </div>

    </div>
  )
}