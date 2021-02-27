import React, { useState, useEffect } from 'react';

import ReactModal from 'react-modal';

interface ModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      //className=" bg-gray-700 border-none rounded-md w-96 h-auto top-1/2 left-1/2 right-auto bottom-auto -mr-5 -translate-x-1/2 -translate-y-1/2"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#1F2937',
          color: '#000000',
          borderRadius: '8px',
          width: '400px',
          border: 'none',
          height: 'auto',
          zIndex: '-moz-initial'
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
