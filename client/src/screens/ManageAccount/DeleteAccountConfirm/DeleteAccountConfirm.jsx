import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import Styled from './DeleteAccount'
import { deleteUser } from '../../../services/users'

export default function DeleteAccountConfirm(props) {
  const [isDeleted, setDeleted] = useState(false)

  const handleDelete = async (e) => {
    e.preventDefault();
    let id = props.id;
    const deleted = await deleteUser(id)
    setDeleted(deleted)
  }

  if (isDeleted) {
    return <Redirect to='/sad-to-see-you-go' />
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