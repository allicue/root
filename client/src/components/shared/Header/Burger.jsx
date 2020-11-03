import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  z-index: 9999;
  display: none;
  left: 0;
  margin-left: 20px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #3d3d3d;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Header open={open} setOpen={setOpen}/>
    </>
  )
}
export default Burger