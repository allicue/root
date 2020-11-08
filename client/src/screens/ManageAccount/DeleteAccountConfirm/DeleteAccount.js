import styled from 'styled-components'

const Styled = styled.div`

  .modal-parent {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background: white;
    background-color: rgba(240, 240, 240, .8);
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -200px;
    margin-top: -150px;
    background: #e8e4d9;
    max-width: 400px;
    padding: 20px;
    border-radius: 15px;
    height: 300px;
    z-index: 2;
  }

  .confirm-button {
    position: relative;
    text-align: center;
    margin: 0 auto;
    margin-top: 15px;
    min-width: 110px;
    padding: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    height: 50px;
    border-style: none;
    border-radius: 45px;
    font-size: 20px;
    color: white;
    width: 250px;
  }

  .confirm-button:focus {
    outline: none;
  }

  .confirm-button:hover {
    box-shadow: 2px 2px 4px 1px #999;
  }

  h4 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 25px;
    text-align: center;
  }

  .confirm {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
  }

  #confirm-delete {
    background-color: #e21a1a;
  }

  #cancel-delete {
    background-color: rgba(116, 159, 92, 0.75);
  }
  `

  export default  Styled