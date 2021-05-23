import {Button, Form, Modal} from "react-bootstrap";
import React, {useState} from "react";

const AddFeedbackModal = ({ employeesList, onAddFeedback }) => {
  const [selectedEmployeeForFeedback, setSelectedEmployeeForFeedback] = useState('');
  const [feedback, setFeedback] = useState('');

  const onEmployeeForFeedbackChange = (value) => {
    setSelectedEmployeeForFeedback(value)
  }

  const onFeedbackChange = (value) => {
    setFeedback(value)
  }

  const onCreateBtnClick = () => {
    onAddFeedback(feedback)
  }

  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Add new Feedback</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <div className="container">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {selectedEmployeeForFeedback ? selectedEmployeeForFeedback.name : 'Select Employee from dropdown'}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {employeesList.map(({name, id}, index) => <a
                    onClick={() => this.selectEmployeeForFeedback(id, name)} key={`${id}-${index}-test`}
                    className="dropdown-item" href="#">{name}</a>)}
                </div>
              </div>
            </div>
          </Form.Group>
        </Form>


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

export default AddFeedbackModal;
