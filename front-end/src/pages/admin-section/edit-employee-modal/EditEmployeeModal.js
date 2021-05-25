import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";

const EditEmployeeModal = ({ editEmployee }) => {
  const [employeeName, setEmployeeName] = useState('');

  const onEmployeeNameChange = (value) => {
    setEmployeeName(value)
  }

  const onCreateBtnClick = () => {
    editEmployee(employeeName)
  }

  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Edit employee</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Employee Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name"
                          value={employeeName}
                          onChange={({target: {value}}) => onEmployeeNameChange(value)}/>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary" onClick={onCreateBtnClick}>Update</Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}

export default EditEmployeeModal;
