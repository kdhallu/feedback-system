import BaseStore from './BaseStore';
import AppDispatcher from '../dispatchers/AppDispatcher';
import Constants from "../Constants";

let _feedbacksList = [];
let _isWaiting = false;

const FeedbackStore = Object.assign({}, BaseStore, {
  getListOfAllFeedbacks() {
    return _feedbacksList;
  },

  isWaiting() {
    return _isWaiting
  },

  dispatcherToken: AppDispatcher.register((payload) => {
    const action = payload.action;
    switch (action.actionType) {
      case Constants.ActionTypes.GET_LIST_OF_ALL_FEEDBACKS_SUCCESS: {
        _feedbacksList = action.response.data.data;
        _isWaiting = false;
        FeedbackStore.emitChange();
        break;
      }

      case Constants.ActionTypes.GET_LIST_OF_ALL_FEEDBACKS_INITIATE: {
        _isWaiting = true;
        FeedbackStore.emitChange();
        break;
      }

      case Constants.ActionTypes.CREATE_NEW_EMPLOYEE_INITIATE: {
        _isWaiting = true;
        FeedbackStore.emitChange();
        break;
      }
      case Constants.ActionTypes.CREATE_NEW_EMPLOYEE_SUCCESS: {
        _isWaiting = false;
        FeedbackStore.emitChange();
      }
    }
  })
})


export default FeedbackStore;
