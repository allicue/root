import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Styled from './DeleteAccount';
import { deleteUser } from '../../../services/users';

export default function DeleteAccountConfirm(props) {
  const [isDeleted, setDeleted] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    let id = props.id;
    const deleted = await deleteUser(id);
    setDeleted(deleted);
  }

  if (isDeleted) {
    return <Redirect to='/sad-to-see-you-go' />
  }

  if (!props.id) {
    return (
      <Styled >
      <div className="modal-parent">
      <div className="modal">
        <form>
          <h4 style={{marginTop: "40px"}}>Please <Link to="/login" style={{color: "#749f5c", textDecoration: "none"}}>log in</Link> if you'd like to manage your account</h4>
          <div className="confirm">
            <button onClick={() => props.setDeleteConfirm(false)} className="confirm-button" id="cancel-delete">Go Back</button>
          </div>
        </form>
      </div>
      </div>
    </Styled>
    )
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