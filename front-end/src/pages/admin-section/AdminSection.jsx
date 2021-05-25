import React, {Component} from "react";
import {Button, Table} from "react-bootstrap";
import EmployeeActions from "../../actions/EmployeeActions";
import FeedbackActions from "../../actions/FeedbackActions";
import EmployeeStore from "../../stores/EmployeeStore";
import FeedbackStore from "../../stores/FeedbackStore";
import AddEmployeeModal from "./add-employee-modal/AddEmployeeModal";
import EditEmployeeModal from "./edit-employee-modal/EditEmployeeModal";
import EditFeedbackModal from "./edit-feedback-modal/EditFeedbackModal";
import AddFeedbackModal from "./add-feedback-modal/AddFeedbackModal";

class AdminSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeesList: [],
      feedbacksList: [],
      addEmployeeModalOpen: false,
      isWaiting: true,
      activeEmpId: '',
      activeFeedbackId: '',
    }
  }

  componentDidMount() {
    EmployeeActions.getAllEmployees();
    FeedbackActions.getAllFeedbacks();
    EmployeeStore.addChangeListener(this.onChange);
    FeedbackStore.addChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState({
      employeesList: EmployeeStore.getListOfAllEmployees(),
      feedbacksList: FeedbackStore.getListOfAllFeedbacks(),
      isWaiting: FeedbackStore.isWaiting() || EmployeeStore.isWaiting(),
      addEmployeeModalOpen: false,
      editEmployeeModalOpen: false,
    })
  }

  toggleAddEmployeeModal = () => {
    this.setState({
      addEmployeeModalOpen: !this.state.addEmployeeModalOpen
    })
  }

  toggleEditEmployeeModal = (activeEmpId) => {
    this.setState({
      editEmployeeModalOpen: !this.state.editEmployeeModalOpen,
      activeEmpId
    })
  }

  toggleAddFeedbackModal = () => {
    this.setState({
      addFeedbackModal: !this.state.addFeedbackModal
    })
  }

  toggleEditFeedbackModal = (activeFeedbackId) => {
    this.setState({
      editFeedbackModal: !this.state.editFeedbackModal,
      activeFeedbackId
    })
  }

  onAddEmployee = (name) => {
    EmployeeActions.addEmployee(name, EmployeeActions.getAllEmployees);
  }

  onDeleteEmployee = (id) => {
    EmployeeActions.deleteEmployee(id, EmployeeActions.getAllEmployees);
  }

  onEditEmployee = (name) => {
    EmployeeActions.editEmployee(this.state.activeEmpId, name, EmployeeActions.getAllEmployees);
  }

  onAddFeedback = (addedBy, receivedBy, feedback) => {
    FeedbackActions.addFeedback(addedBy, receivedBy, feedback, FeedbackActions.getAllFeedbacks);
  }

  deleteFeedback = (id) => {
    FeedbackActions.deleteFeedback(id, FeedbackActions.getAllFeedbacks);
  }

  onEditFeedback = (addedBy, receivedBy, feedback) => {
    FeedbackActions.editFeedback(this.state.activeFeedbackId, addedBy, receivedBy, feedback, FeedbackActions.getAllFeedbacks)
  }

  renderEmployees = () => {
    return (
      <>
        <div style={{marginBottom: '20px'}}>
          <h4 variant="primary">
            Employee List
          </h4>
          <Button variant="primary" style={{ marginLeft: '20px' }} onClick={this.toggleAddEmployeeModal}>
            Add employee
          </Button>
        </div>

        <Table striped bordered hover>
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {this.state.employeesList.map(({ employeeId, name, createdAt }, index) => {
            return(
              <tr key={`${employeeId}-${name}`}>
                <td>{index}</td>
                <td>{name}</td>
                <td>{createdAt}</td>
                <td>
                  <Button onClick={() => this.onDeleteEmployee(employeeId)}>Delete</Button>
                  <Button onClick={() => this.toggleEditEmployeeModal(employeeId)} style={{marginLeft: '5px'}}>Edit</Button>
                </td>
              </tr>
            )
          })}
          </tbody>
        </Table>
      </>
    )
  }


  renderLoader() {
    return(
      <main role="main">
        <section className="jumbotron text-center mb-0" style={{height: '100vh'}}>
          <div className="container">
            <div className="dropdown">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  renderFeedbacks = () => {
    return (
      <>
        <div style={{marginBottom: '20px'}}>
          <h4>
            Feedbacks List
          </h4>
          <Button variant="primary" style={{ marginLeft: '20px' }} onClick={this.toggleAddFeedbackModal}>
            Add Feedback
          </Button>
        </div>

        <Table striped bordered hover>
          <thead>
          <tr>
            <th>#</th>
            <th>Added By</th>
            <th>Received By</th>
            <th>Feedback</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {this.state.feedbacksList.map(({ feedbackId, addedBy, name, createdAt, feedback, receivedBy }, index) => {
            return(
              <tr key={`${feedbackId}-${name}`}>
                <td>{index}</td>
                <td>{EmployeeStore.getEmployeeNameById(addedBy)}</td>
                <td>{EmployeeStore.getEmployeeNameById(receivedBy)}</td>
                <td>{feedback}</td>
                <td>
                  <Button onClick={() => this.deleteFeedback(feedbackId)}>Delete</Button>
                  <Button onClick={() => this.toggleEditFeedbackModal(feedbackId)} style={{ marginLeft: '5px' }}>Edit</Button>
                </td>
              </tr>
            )
          })}
          </tbody>
        </Table>
      </>
    )
  }

  render() {
    if(this.state.isWaiting) {
      return this.renderLoader();
    }
    return (
      <main role="main">
        <section className="jumbotron text-center mb-0" style={{height: '100vh'}}>
          <div className="container">
            { this.state.addEmployeeModalOpen  && <AddEmployeeModal
              onAddEmployee={this.onAddEmployee}
            /> }
            { this.state.editEmployeeModalOpen  && <EditEmployeeModal
              editEmployee={this.onEditEmployee}
            /> }
            {this.renderEmployees()}
            { this.state.addFeedbackModal  && <AddFeedbackModal
              employeesList={this.state.employeesList}
              onAddFeedback={this.onAddFeedback}
            /> }
            { this.state.editFeedbackModal  && <EditFeedbackModal
              employeesList={this.state.employeesList}
              onEditFeedback={this.onEditFeedback}
            /> }
            {this.renderFeedbacks()}
          </div>
        </section>
      </main>
    )
  }
}

export default AdminSection;
