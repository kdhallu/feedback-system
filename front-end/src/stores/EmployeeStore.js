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


  getListOfAllEmployees() {
    return _listOfEmployees;
  },

  dispatcherToken: AppDispatcher.register((payload) => {
    const action = payload.action;
    console.log(action.actionType)
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
      case Constants.ActionTypes.ADD_EMPLOYEE_FEEDBACK_INITIATE: {
        _isWaiting = false
        EmployeeStore.emitChange();
      }

    }
  })
})


export default EmployeeStore;
