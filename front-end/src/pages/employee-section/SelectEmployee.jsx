import React, {Component} from 'react';
import EmployeeActions from "../../actions/EmployeeActions";
import EmployeeStore from "../../stores/EmployeeStore";

class SelectEmployee extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employeesList: EmployeeStore.getListOfAllEmployees()
    }
  }


  componentDidMount() {
    EmployeeActions.getAllEmployees();
    EmployeeStore.init();
    EmployeeStore.addChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState({
      employeesList: EmployeeStore.getListOfAllEmployees(),
    })
  }

  render() {
    return (
      <main role="main">
        <section className="jumbotron text-center mb-0" style={{height: '100vh'}}>
          <div className="container">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select User to login
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {this.state.employeesList.map(({ name, id }) => <a className="dropdown-item" href={`/employee-feedback?id=${id}`}>{ name }</a>)}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }


}

export default SelectEmployee;
