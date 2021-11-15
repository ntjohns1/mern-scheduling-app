import React from 'react';
import { createPortal } from 'react-dom';
import useConfirm from '../hooks/useConfirm';
import { Modal, Button } from "react-bootstrap";

const styles = {
  card: {
    zIndex: 1000000000000111,
    position: 'absolute',
    top: '200px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
};

const ConfirmModal = () => {
  const { onConfirm, onCancel, confirmState } = useConfirm();

  const portalElement = document.getElementById('portal');
  const component = confirmState.show ? (
    <div className="portal-overlay">
    <Modal.Dialog style={styles.card} backdrop="static">
      <Modal.Header>
        <Modal.Title>{confirmState?.text && confirmState.text}</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>Close</Button>
        <Button variant="primary" onClick={onConfirm}>Yes</Button>
      </Modal.Footer>
    </Modal.Dialog>
    </div>
  ) : null;
  return createPortal(component, portalElement);
};
export default ConfirmModal;

