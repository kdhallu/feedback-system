import Constants from './../Constants';
import AppDispatcher from '../dispatchers/AppDispatcher';
import * as EmployeeServices from "../services/EmployeeServices";

const EmployeesActions =  {
  getAllEmployees() {
    AppDispatcher.handleViewAction({
      actionType: Constants.ActionTypes.GET_LIST_OF_ALL_EMPLOYEES_INITIATE,
    });
    const successKey = Constants.ActionTypes.GET_LIST_OF_ALL_EMPLOYEES_SUCCESS;
    const failureKey = Constants.ActionTypes.GET_LIST_OF_ALL_EMPLOYEES_FAILURE;

    EmployeeServices.getAllEmployees(successKey, failureKey)
  },

  addEmployee(name, cb) {
    AppDispatcher.handleViewAction({
      actionType: Constants.ActionTypes.CREATE_NEW_EMPLOYEE_INITIATE,
    });
    const successKey = Constants.ActionTypes.CREATE_NEW_EMPLOYEE_SUCCESS;
    const failureKey = Constants.ActionTypes.CREATE_NEW_EMPLOYEE_FAILURE;
    EmployeeServices.createNewEmployee(successKey, failureKey, {
      name
    }, cb)
  },

  deleteEmployee(id, cb) {
    AppDispatcher.handleViewAction({
      actionType: Constants.ActionTypes.DELETE_EMPLOYEE_INITIATE,
    });
    const successKey = Constants.ActionTypes.DELETE_EMPLOYEE_SUCCESS;
    const failureKey = Constants.ActionTypes.DELETE_EMPLOYEE_FAILURE;
    EmployeeServices.deleteEmployee(successKey, failureKey, {
      id
    }, cb)
  },

  editEmployee(id, name, cb) {
    AppDispatcher.handleViewAction({
      actionType: Constants.ActionTypes.EDIT_EMPLOYEE_INITIATE,
    });
    const successKey = Constants.ActionTypes.EDIT_EMPLOYEE_SUCCESS;
    const failureKey = Constants.ActionTypes.EDIT_EMPLOYEE_FAILURE;
    EmployeeServices.editEmployee(successKey, failureKey, {
      id,
      name
    }, cb)
  },
}

export default EmployeesActions;
