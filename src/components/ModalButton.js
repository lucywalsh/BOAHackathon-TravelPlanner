import {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalButton({buttonText, modalTitle, modalBody, linkButtonText, externalLink}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <Row>
            <Button className="modal-button" onClick={handleShow} style={{backgroundColor:'#9f04ed', borderColor:'#9f04ed'}}>
                {buttonText}
            </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title className="text-center modal-title">{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" style={{backgroundColor:'#9103D8', borderColor:'#9103D8'}} href={externalLink} target="_blank" rel="noopener noreferrer">{linkButtonText}</Button>
        </Modal.Footer>
      </Modal>
        </Row>
    );
}