import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import './TransportationType.css'
import { updateTransportationType } from '../../services/transportationTypes'

export default function EditTransportationType(props) {
  const [isUpdated, setIsUpdated] = useState(false)

  const [transportationType, setTransportationType] = useState({
    title: '',
    imgURL: '',
    description: ''
  }, [])

  let { id } = useParams()

  useEffect(() => {
    const fetchType = async () => {
      const type = await updateTransportationType(props.id)
      fetchType(type)

    }
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransportationType({
      ...transportationType,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { id } = props.match.params;
    const updated = await updateTransportationType(id, transportationType)
    setIsUpdated(updated)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="edit-title"
          placeholder="Mode of Transportation"
          value={props.title}
          name="title"
          required
          onChange={handleChange}
        />
        <input
          className="edit-description"
          placeholder="Climate Impact"
          value={props.description}
          name="description"
          required
          onChange={handleChange}
        />

        <input
          className="edit-image-link"
          placeholder="Copy Image Link Here"
          value={props.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

// get type by id
// id will be passed down through props
// put function will take props.id

