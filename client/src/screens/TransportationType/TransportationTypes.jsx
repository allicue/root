import React, { useEffect, useState } from 'react'
import TransportationType from '../../components/TransportationType/TransportationType'
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
      <h1>CLIMATE IMPACT BY TRANSPORTATION TYPE</h1>
      <div className="transportation-types-parent">
        <div className="transportation-types">{TYPES}</div>
        <div className="green-news"></div>
      </div>
    </div>
  )
}