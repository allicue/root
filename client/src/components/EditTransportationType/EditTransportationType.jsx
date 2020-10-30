import React, { useEffect, useState } from 'react'
import './TransportationType.css'
import { updateTransportationType } from '../../services/transportationTypes'

export default function EditTransportationType(props) {
  const [isUpdated, setIsUpdated] = useState(false)

  const [transportationType, setTransportationType] = useState({
    title: '',
    imgURL: '',
    description: ''
  })



  useEffect(() => {
    const fetchType = async () => {
      const type = await updateTransportationType(props.id)
      setTransportationType(type)
    }
  })

  return (
    <div>
      <form>
        <input />
        <input />
        <input />
      </form>
    </div>
  )
}

// get type by id
// id will be passed down through props
// put function will take props.id