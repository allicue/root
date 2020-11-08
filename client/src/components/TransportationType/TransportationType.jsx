import React from 'react';
import styled from 'styled-components';
import './TransportationType.css';

export default function TransportationType(props) {

  const TitleContainer = styled.div`
  .title-container {
    text-align: center;
    min-width: 300px;
    background: url(${props.imgURL});
    background-size: 130%;
    background-position: center;
  }

  @media screen and (max-width:500px) {
    .title-container {
      min-width: 60px;
      height: 60px;
      width: 60px;
      border-radius: 5px;
      background-size: 150%;
    }
  `

  return (
    <div className="transportation-type">
      <TitleContainer>
      <div className="title-container">
        <div className="h3-container"><h3 className="type-title">{props.title.toUpperCase()}</h3></div>
      </div>
      </TitleContainer>
      <div className="title-plus-description">
        <h3 className="mobile-title" >{props.title}</h3>
        <div className="description-container">
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  );
};