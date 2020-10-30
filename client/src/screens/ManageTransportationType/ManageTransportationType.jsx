import React, { useEffect, useState } from 'react'
import EditTransportationType from '../../components/EditTransportationType/EditTransportationType'
import { getTransportationTypes } from '../../services/transportationTypes'

export default function ManageTransportationTypes() {
  const [updated, setUpdated] = useState(false)
  const [transportationTypes, setTransportationTypes] = useState([])


  useEffect(() => {
    const getData = async () => {
      const types = await getTransportationTypes()
      setTransportationTypes(types)
    }
    getData()
  }, [updated])

  const UPDATETYPES = transportationTypes.map(item =>
    <EditTransportationType id={item._id} title={item.title.toUpperCase()} imgURL={item.imgURL} description={item.description} updated={updated} setUpdated={setUpdated} />
  )

  return (
    <div className="Layout-placeholder">
      {/* Edit divs when layout is implemented */}
      <div className="page-title">
        <h1>CLIMATE IMPACT BY TRANSPORTATION TYPE</h1>
      </div>
      <div className="edit-page-content">
        <div className="edit-transportation-types-parent">
          <div className="edit-transportation-types">{UPDATETYPES}</div>
        </div>
      </div>
    </div>
  )
}