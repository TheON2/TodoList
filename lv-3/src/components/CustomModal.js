import Modal from "react-modal";
import React, {useState} from "react";
import CustomButton from "./CustomButton";

const CustomModal = ({name, size, theme, border, type}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      {type === 'type1' ?  (<><CustomButton
          onClick={() => setModalIsOpen(true)}
          size={size}
          theme={theme}
          border={border}
        >
          Open {name}
        </CustomButton>
        <Modal
          isOpen={modalIsOpen}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <h2>{name}</h2>
          <button onClick={() => setModalIsOpen(false)}>Cancel</button>
          <button onClick={() => setModalIsOpen(false)}>Confirm</button>
        </Modal></>):(<><CustomButton
        onClick={() => setModalIsOpen(true)}
        size={size}
        theme={theme}
        border={border}
        >
        Open {name}
        </CustomButton>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        >
        <h2>{name}</h2>
        <button onClick={() => setModalIsOpen(false)}>x</button>
        </Modal></>)}
    </>
  )
}
export default CustomModal