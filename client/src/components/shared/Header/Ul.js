import styled from 'styled-components'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  
  li {
    text-transform: uppercase;
  }
  
  @media (max-width: 500px) {
    flex-flow: column nowrap;
    background-color: #e8e4d9;
    position: fixed;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    li {
      margin: 0 auto;
      text-transform: capitalize;
      font-weight: 500;
      padding: 18px 10px;
    }
  }
`;

export default Ul;