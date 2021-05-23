import keyMirror from 'keymirror';

const Constants =  {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',
  ActionTypes: keyMirror({
    GET_LIST_OF_ALL_EMPLOYEES_INITIATE: null,
    GET_LIST_OF_ALL_EMPLOYEES_SUCCESS: null,
    GET_LIST_OF_ALL_EMPLOYEES_FAILURE: null,

    ADD_EMPLOYEE_FEEDBACK_INITIATE: null,
    ADD_EMPLOYEE_FEEDBACK_SUCCESS: null,
    ADD_EMPLOYEE_FEEDBACK_FAILURE: null,

    EDIT_FEEDBACK_INITIATE: null,
    EDIT_FEEDBACK_SUCCESS:null,
    EDIT_FEEDBACK_FAILURE: null,

    GET_LIST_OF_ALL_FEEDBACKS_INITIATE: null,
    GET_LIST_OF_ALL_FEEDBACKS_SUCCESS: null,
    GET_LIST_OF_ALL_FEEDBACKS_FAILURE: null,

    CREATE_NEW_EMPLOYEE_INITIATE: null,
    CREATE_NEW_EMPLOYEE_SUCCESS: null,
    CREATE_NEW_EMPLOYEE_FAILURE: null,

    DELETE_EMPLOYEE_FAILURE: null,
    DELETE_EMPLOYEE_INITIATE: null,
    DELETE_EMPLOYEE_SUCCESS: null,

    EDIT_EMPLOYEE_SUCCESS: null,
    EDIT_EMPLOYEE_INITIATE: null,
    EDIT_EMPLOYEE_FAILURE: null,
  }),
  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null,
  }),
}

export default Constants;
