import React from 'react'
import './TransportationType.css'

export default function TransportationType(props) {


  return (
    <div>
      <div className="title-container" style={{ background: `url(${props.imgURL})`, backgroundSize: "300px" }}><h1 >{props.title}</h1></div>
      {/* <img src={props.imgURL} /> */}
      <p>{props.description}</p>
    </div>
  )
}