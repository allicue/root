import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: space-evenly;
  justify-content: space-evenly;
  align-items: center;

  li {
    text-transform: uppercase;
  }

  @media (max-width: 500px) {
    flex-flow: column nowrap;
    background-color: #e8e4d9;
    align-items: flex-start;
    justify-content: space-around;
    padding-left: 20px;
    position: fixed;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    padding-bottom: 100px;

    li {
      margin: 0 auto;
      text-transform: capitalize;
      font-weight: 500;
      padding: 18px 10px;
    }
  }
`;

export default Ul;
