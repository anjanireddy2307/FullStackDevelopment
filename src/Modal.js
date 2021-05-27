
import React from "react";
const Modal = ({isOpen,card}) =>(
    <Modal trigger={isOpen}>
      <Modal.Header>Sign In</Modal.Header>
      <Modal.Content>
          <p>
          You must Sign In before you can add project ideas to your favourites.
          </p>
      </Modal.Content>
    </Modal>
  )
  
  export default Modal;