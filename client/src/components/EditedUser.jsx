import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editUser, getUsers } from '../redux/action';
const EditedUser = ({user}) => {
    const [fullName, setFullName] = useState(user.fullName)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const dispatch=useDispatch()
    const handelsubmit=(e)=>{
        e.preventDefault();
        const newOne={_id:user._id,fullName,email,phone}
      dispatch(editUser(newOne))
      dispatch(getUsers())
      closeModal()
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');
      const [modalIsOpen, setIsOpen] = React.useState(false);

      function openModal() {
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }
  return (
    <div>
          <button onClick={openModal}>EDIT</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <form onSubmit={handelsubmit}>
              <input type="text" placeholder='full Name' value={fullName} onChange={e=>setFullName(e.target.value)}/>
              <input type="text" placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/>
              <input type="text" placeholder='phone' value={phone} onChange={e=>setPhone(e.target.value)}/>
              <button type='submit'>Confirm</button>
              <button onClick={closeModal}>Cancel</button>
          </form>
      </Modal>
    </div>
  )
}

export default EditedUser