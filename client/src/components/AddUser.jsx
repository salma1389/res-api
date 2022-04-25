import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addNewUser } from '../redux/action';

const AddUser = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const dispatch=useDispatch()
    const handelsubmit=(e)=>{
        e.preventDefault();
        const newOne={fullName,email,phone}
      dispatch(addNewUser(newOne))
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
          <button onClick={openModal}>ADD</button>
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

export default AddUser