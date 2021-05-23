import React, {Component} from "react";
import EmployeeActions from "../../actions/EmployeeActions";
import FeedbackActions from "../../actions/FeedbackActions";
import EmployeeStore from "../../stores/EmployeeStore";
import FeedbackStore from "../../stores/FeedbackStore";
import {Badge, Button, Table} from "react-bootstrap";
import AddEmployeeModal from "../../components/add-employee-modal/AddEmployeeModal";
import EditEmployeeModal from "../../components/edit-employee-modal/EditEmployeeModal";

class AdminSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeesList: [],
      Feedbacks: [],
      addEmployeeModalOpen: false,
      isWaiting: true,
      employeeId: '',
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
      Feedbacks: FeedbackStore.getListOfAllFeedbacks(),
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

  toggleEditEmployeeModal = (employeeId) => {
    this.setState({
      editEmployeeModalOpen: !this.state.editEmployeeModalOpen,
      employeeId
    })
  }

  onAddEmployee = (name) => {
    EmployeeActions.addEmployee(name, EmployeeActions.getAllEmployees);
  }

  onDeleteEmployee = (id) => {
    EmployeeActions.deleteEmployee(id, EmployeeActions.getAllEmployees);
  }

  onEditEmployee = (name) => {
    EmployeeActions.editEmployee(this.state.employeeId, name, EmployeeActions.getAllEmployees);
  }

  renderEmployees = () => {
    return (
      <>
        <div style={{marginBottom: '20px'}}>
          <Button variant="primary">
            Employee List
          </Button>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addEmployeeModal"
                  data-whatever="@mdo">Open modal for @mdo
          </button>

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
          {this.state.employeesList.map(({ id, name, createdAt }, index) => {
            return(
              <tr key={`${id}-${name}`}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{createdAt}</td>
                <td>
                  <Button onClick={() => this.onDeleteEmployee(id)}>Delete</Button>
                  <Button onClick={() => this.toggleEditEmployeeModal(id)}>edit</Button>
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
              onAddEmployee={this.onEditEmployee}
            /> }

            {this.renderEmployees()}

            { this.state.addEmployeeModalOpen  && <AddFeedbackModal
              onAddEmployee={this.onAddEmployee}
            /> }

            { this.state.editEmployeeModalOpen  && <EditFeedbackModal
              onAddEmployee={this.onEditFeedback}
            /> }


            {this.renderEmployees()}

          </div>
        </section>
      </main>
    )
  }
}

export default AdminSection;
