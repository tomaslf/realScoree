import './Item.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Card } from 'react-bootstrap';

const Item = ({ name, img, match, competition }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>


      <Card className="text-center">
        <Card.Header className='cardHeader'>{competition} </Card.Header>
        <Card.Body>
          <Card.Text className='card-text'>{name}</Card.Text>
          <Card.Img src={img} alt={name} />
        </Card.Body>
        <div className='buttonContainer'>
          <button className='button' onClick={handleShow}>
            See Highlights
          </button>
        </div>

      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {match}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>




    </>
  )
}

export default Item