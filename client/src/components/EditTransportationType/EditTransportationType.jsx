import React, { useEffect, useState } from 'react'
import './EditTransportationType.css'
import { updateTransportationType } from '../../services/transportationTypes'

export default function EditTransportationType(props) {

  const [transportationType, setTransportationType] = useState({
    title: props.title,
    imgURL: props.imgURL,
    description: props.description
  })

  useEffect(() => {
    const fetchType = async () => {
      const type = await updateTransportationType(props.id)
      setTransportationType(type)
    }
    fetchType()
  }, [props.id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setTransportationType({
      ...transportationType,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let id = props.id
    await updateTransportationType(id, transportationType)
    props.setUpdated(!props.updated)
  }

  return (
    <div className="edit-transportation-type" >
      <form onSubmit={handleSubmit}>
        <div className="main-div-contents">
          <div className="edit-top-container">
            <div className="edit-title-left-div">
              <img className="title-image" src={props.imgURL} alt={props.id} />
              <div className="edit-title-container">
                <input
                  className="edit-title"
                  placeholder="Mode of Transportation"
                  value={transportationType.title.toUpperCase()}
                  name="title"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="edit-description-container">
              <textarea
                className="edit-description"
                placeholder="Climate Impact"
                value={transportationType.description}
                name="description"
                required
                onChange={handleChange}
              />
            </div>
            <button className="edit-form-submit" type="submit" >Submit</button>
          </div>
        </div>

        <div className="input-image-parent">
          <label htmlFor="imgURL">Copy Image URL Here: </label>
          <input
            className="edit-image-link"
            placeholder="Copy Image Link Here"
            value={transportationType.imgURL}
            name="imgURL"
            required
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  )
}

// get type by id
// id will be passed down through props
// put function will take props.id

