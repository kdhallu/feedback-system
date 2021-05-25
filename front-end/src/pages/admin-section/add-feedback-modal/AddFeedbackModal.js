import {Button, Form, Modal} from "react-bootstrap";
import React, {useState} from "react";

const AddFeedbackModal = ({employeesList, onAddFeedback}) => {
  const [feedbackContributorDetails, setFeedbackContributorDetails] = useState({});
  const [feedbackReceiversDetails, setFeedbackReceiversDetails] = useState({});
  const [feedback, setFeedback] = useState('');

  const onContributorSelect = (employeeId, name) => {
    setFeedbackContributorDetails({employeeId, name})
  }

  const onReceiverSelect = (employeeId, name) => {
    setFeedbackReceiversDetails({ employeeId, name })
  }

  const onFeedbackChange = (value) => {
    setFeedback(value)
  }

  const onCreateBtnClick = () => {
    onAddFeedback(feedbackContributorDetails.employeeId, feedbackReceiversDetails.employeeId, feedback)
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
              <h4>Feedback By</h4>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {feedbackReceiversDetails ? feedbackReceiversDetails.name : 'Select Employee from dropdown'}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {employeesList.map(({name, employeeId}, index) => <Button
                    onClick={() => onReceiverSelect(employeeId, name)} key={`${employeeId}-${index}-test`}
                    className="dropdown-item" href="#">{name}</Button>)}
                </div>
              </div>
            </div>
          </Form.Group>
        </Form>

        <Form>
          <Form.Group controlId="formBasicEmail">
            <div className="container">
              <h4>Feedback To</h4>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {feedbackContributorDetails ? feedbackContributorDetails.name : 'Select Employee from dropdown'}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {employeesList.map(({name, employeeId}, index) => <Button
                    onClick={() => onContributorSelect(employeeId, name)} key={`${employeeId}-${index}-test`}
                    className="dropdown-item">{name}</Button>)}
                </div>
              </div>
            </div>
          </Form.Group>
        </Form>

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Feedback</Form.Label>
            <Form.Control as="textarea" placeholder="Enter Feedback" rows={3}
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
