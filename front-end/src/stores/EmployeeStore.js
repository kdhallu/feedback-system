import BaseStore from './BaseStore';
import AppDispatcher from '../dispatchers/AppDispatcher';
import Constants from "../Constants";

let _listOfEmployees = [];
let _feedbackAdded = false;
let _isWaiting = true;

const EmployeeStore = Object.assign({}, BaseStore, {
  init() {
    _feedbackAdded = false;
  },

  isWaiting() {
    return _isWaiting
  },

  getEmployeeNameById(empId) {
    return _listOfEmployees.find(employee => employee.employeeId == empId)?.name;
  },

  getListOfAllEmployees() {
    return _listOfEmployees;
  },

  dispatcherToken: AppDispatcher.register((payload) => {
    const action = payload.action;
    switch (action.actionType) {
      case Constants.ActionTypes.GET_LIST_OF_ALL_EMPLOYEES_SUCCESS: {
        _listOfEmployees = action.response.data;
        _isWaiting = false
        EmployeeStore.emitChange();
        break;
      }

      case Constants.ActionTypes.ADD_EMPLOYEE_FEEDBACK_SUCCESS: {
        _isWaiting = false
        EmployeeStore.emitChange();
        break;
      }

      case Constants.ActionTypes.GET_LIST_OF_ALL_EMPLOYEES_INITIATE:
      case Constants.ActionTypes.EDIT_EMPLOYEE_INITIATE:
      case Constants.ActionTypes.DELETE_EMPLOYEE_INITIATE:
      case Constants.ActionTypes.CREATE_NEW_EMPLOYEE_INITIATE:
        _isWaiting = true;
        EmployeeStore.emitChange();

    }
  })
})


export default EmployeeStore;
