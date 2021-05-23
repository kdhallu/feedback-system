import {Button, Form, Modal} from "react-bootstrap";
import React, {useState} from "react";

const EditFeedbackModal = ({ onUpdateFeedback }) => {
  const [feedback, setFeedback] = useState('');

  const onFeedbackChange = (value) => {
    setFeedback(value)
  }

  const onCreateBtnClick = () => {
    onUpdateFeedback(feedback)
  }

  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Edit Feedback</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Feedback</Form.Label>
            <Form.Control type="text" placeholder="Enter name"
                          value={feedback}
                          onChange={({target: {value}}) => onFeedbackChange(value)}/>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary" onClick={onCreateBtnClick}>Create</Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}

export default EditFeedbackModal;
