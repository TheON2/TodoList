import React, {useState} from 'react';
import Modal from 'react-modal'
import FlowSelect from "./components/FlowSelect";

const App = () => {
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  return (
    <div id='root'>
      <div>
        <button onClick={() => setModalIsOpen1(true)}>Open First Modal</button>
        <Modal
          isOpen={modalIsOpen1}
          shouldCloseOnOverlayClick={false} // 이 속성으로 overlay 클릭 시 모달이 닫히지 않도록 설정
          onRequestClose={() => setModalIsOpen1(false)}
        >
          <h2>First Modal</h2>
          <button onClick={() => setModalIsOpen1(false)}>Cancel</button>
          <button onClick={() => setModalIsOpen1(false)}>Confirm</button>
        </Modal>

        <button onClick={() => setModalIsOpen2(true)}>Open Second Modal</button>
        <Modal
          isOpen={modalIsOpen2}
          onRequestClose={() => setModalIsOpen2(false)} // overlay 클릭 시 모달이 닫힘
        >
          <h2>Second Modal</h2>
          <button onClick={() => setModalIsOpen2(false)}>Close</button>
        </Modal>
      </div>
      <div style={{ overflow: 'hidden', width: '200px', height: '100px' , border: '1px solid blue'}}>
      <FlowSelect/>

      </div>
    </div>
  );
};

export default App;