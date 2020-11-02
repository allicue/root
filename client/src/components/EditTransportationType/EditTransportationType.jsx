import React, { useEffect, useState } from 'react'
import './EditTransportationType.css'
import { updateTransportationType, deleteTransportationType } from '../../services/transportationTypes'
import Logo from '../../Assets/Icons/ROOT_Logo_Icon_Primary.png'


export default function EditTransportationType(props) {

  const [transportationType, setTransportationType] = useState({
    title: props.title,
    imgURL: props.imgURL,
    description: props.description
  });

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
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let id = props.id;
    await updateTransportationType(id, transportationType);
    props.setUpdated(!props.updated);
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    let id = props.id;
    window.confirm('Are you sure you want to delete this?') ?
      await deleteTransportationType(id, transportationType) :
      console.log('deleted');
    props.setUpdated(!props.updated);
  }

  return (
    <div className="edit-transportation-type" >
      <form onSubmit={handleSubmit}>
        <div className="main-div-contents">
          <div className="edit-top-container">
            <div className="edit-title-left-div">
              <img className="title-image" src={props.imgURL} onError={(e) => e.target.src = Logo} alt={props.id} />
              <div className="edit-title-container">
                <textarea
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
            <div className="buttons">
              <button className="delete" onClick={handleDelete}>Remove</button>
              <button className="edit-form-submit" type="submit" >Save</button>
            </div>
          </div>
        </div>

        <div className="input-image-parent">
          <label className="input-image" htmlFor="imgURL">Image URL: </label>
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
