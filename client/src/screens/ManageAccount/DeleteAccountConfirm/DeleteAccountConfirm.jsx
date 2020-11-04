import React from 'react'
import styled from 'styled-components'
import { deleteUser } from '../../../services/users'

export default function DeleteAccountConfirm(props) {

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
    background: #e8e4d9;
    position: fixed;
    z-index: 2;
    margin-left: -200px;
    margin-top: -150px;
    top: 50%;
    left: 50%;
    max-width: 400px;
    height: 300px;
    padding: 20px;
    border-radius: 15px;
  }

  .confirm-button {
    width: 250px;
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
    text-align: center;
    color: white;
    position: relative;
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

  const handleDelete = async (e) => {
    e.preventDefault();
    let id = props.id;
    await deleteUser(id)
  }

  return (
    <Styled >
      <div className="modal-parent">
      <div className="modal">
        <form>
          <h4>Are you sure you want to delete your account?</h4>
          <div className="confirm">
            <button onClick={handleDelete} className="confirm-button" id="confirm-delete">Yes, I'm sure</button>
            <button onClick={() => props.setDeleteConfirm(false)} className="confirm-button" id="cancel-delete">Cancel</button>
          </div>
        </form>
      </div>
      </div>
    </Styled>
  )
}