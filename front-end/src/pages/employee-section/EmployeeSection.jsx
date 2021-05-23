import React from 'react';
import EmployeeStore from "../../stores/EmployeeStore";
import EmployeeActions from "../../actions/EmployeeActions";
import FeedbackActions from "../../actions/FeedbackActions";
import FeedbackStore from "../../stores/FeedbackStore";

class EmployeeSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeesList: [],
      selectedEmployeeForFeedback: false,
      isWaiting: true,
      feedback: ''
    }

    const url = new URL(window.location.href);
    this.activeEmployeeId = url.searchParams.get('id');

  }

  componentDidMount() {
    EmployeeActions.getAllEmployees();
    EmployeeStore.addChangeListener(this.onChange);
    if(!this.activeEmployeeId) {
      window.location.href = '/select-employee'
    }
  }

  onChange = () => {
    const employeesList = EmployeeStore.getListOfAllEmployees();
    this.setState({
      isWaiting: EmployeeStore.isWaiting() || FeedbackStore.isWaiting(),
      employeesList
    })
  }

  selectEmployeeForFeedback(id, name) {
    this.setState({
      selectedEmployeeForFeedback: {
        id, name
      }
    })
    document.querySelectorAll('.dropdown-menu.show')[0].classList.remove("show");
  }

  onSubmitFeedback = () => {

    FeedbackActions.addFeedback(this.activeEmployeeId, this.state.selectedEmployeeForFeedback.id, this.state.feedback);
  }

  onFeedbackChange = (feedback) => {
    this.setState({
      feedback
    })
  }

  renderLoader() {
    return (
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

    if (this.state.isWaiting) {
      return this.renderLoader()
    }
    return (
      <main role="main">
        <section className="jumbotron text-center mb-0" style={{height: '100vh'}}>
          <div className="container">
            <div className="dropdown">
              <form>
                <div className="container">
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {this.state.selectedEmployeeForFeedback ? this.state.selectedEmployeeForFeedback.name : 'Select Employee from dropdown'}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {this.state.employeesList.map(({name, id}, index) => <a
                        onClick={() => this.selectEmployeeForFeedback(id, name)} key={`${id}-${index}-test`}
                        className="dropdown-item" href="#">{name}</a>)}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Your feedback</label>
                  <textarea className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            onChange={({target: {value}}) => this.onFeedbackChange(value)}
                            value={this.state.feedback}
                            placeholder="Enter your feedback"/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onSubmitFeedback}>Submit</button>
              </form>
            </div>
          </div>
        </section>
      </main>)
  }
}


export default EmployeeSection;
