import React from 'react'
import './TransportationType.css'

export default function TransportationType(props) {


  return (
    <div className="transportation-type">
      <div className="title-container" style={{ background: `url(${props.imgURL})`, backgroundSize: "300px" }}>
        <h3 >{props.title}</h3>
      </div>
      <p>{props.description}</p>
    </div>
  )
}