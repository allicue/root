import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 18px;
  z-index: 9999;
  display: none;
  left: 0;
  margin-left: 20px;
  cursor: pointer;

  &:active .bar-line,
  &:hover .bar-line {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 500px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  .bar-line {
    width: 38px;
    height: 3px;
    background-color: #3d3d3d;
  }
`;

function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div className="bar-line" />
        <div className="bar-line" />
        <div className="bar-line" />
      </StyledBurger>
      <Header open={open} setOpen={setOpen} />
    </>
  );
}
export default Burger;
