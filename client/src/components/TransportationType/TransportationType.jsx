import React from 'react'
import './TransportationType.css'

export default function TransportationType(props) {


  return (
    <div className="transportation-type">
      <div className="title-container" style={{ background: `url(${props.imgURL})`, backgroundSize: "380px", backgroundPosition: "center" }}>
        <div className="h3-container"><h3>{props.title}</h3></div>
      </div>
      <div className="description-container">
        <p>{props.description}</p>
      </div>
    </div>
  )
}