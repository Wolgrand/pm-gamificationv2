import React, { useRef, useCallback } from 'react';

import Modal from '../modal';



interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}


const ModalConfirmation: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  children
}) => {


  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      {children}
    </Modal>
  );
};

export default ModalConfirmation;
