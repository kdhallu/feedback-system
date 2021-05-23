import Constants from './../Constants';
import AppDispatcher from '../dispatchers/AppDispatcher';
import * as FeedbackServices from "../services/FeedbackServices";

const FeedbackActions = {
  getAllFeedbacks() {
    AppDispatcher.handleViewAction({
      actionType: Constants.ActionTypes.GET_LIST_OF_ALL_FEEDBACKS_INITIATE,
    });
    const successKey = Constants.ActionTypes.GET_LIST_OF_ALL_FEEDBACKS_SUCCESS;
    const failureKey = Constants.ActionTypes.GET_LIST_OF_ALL_FEEDBACKS_FAILURE;
    FeedbackServices.getAllFeedbacks(successKey, failureKey)
  },

  addFeedback(addedBy, receivedBy, feedback) {
    AppDispatcher.handleViewAction({
      actionType: Constants.ActionTypes.ADD_EMPLOYEE_FEEDBACK_INITIATE,
    });
    const successKey = Constants.ActionTypes.ADD_EMPLOYEE_FEEDBACK_SUCCESS;
    const failureKey = Constants.ActionTypes.ADD_EMPLOYEE_FEEDBACK_FAILURE;

    FeedbackServices.submitFeedback(successKey, failureKey, {
      addedBy,
      receivedBy,
      feedback
    })
  },

  edit(id, feedback) {
    AppDispatcher.handleViewAction({
      actionType: Constants.ActionTypes.EDIT_FEEDBACK_INITIATE,
    });
    const successKey = Constants.ActionTypes.EDIT_FEEDBACK_SUCCESS;
    const failureKey = Constants.ActionTypes.EDIT_FEEDBACK_FAILURE;

    FeedbackServices.editFeedback(successKey, failureKey, {
      id,
      feedback
    })
  },

  deleteFeedback(id) {
    AppDispatcher.handleViewAction({
      actionType: Constants.ActionTypes.DELETE_FEEDBACK_INITIATE,
    });
    const successKey = Constants.ActionTypes.DELETE_FEEDBACK_SUCCESS;
    const failureKey = Constants.ActionTypes.DELETE_FEEDBACK_FAILURE;

    FeedbackServices.deleteFeedback(successKey, failureKey, {
      id
    })
  }


}

export default FeedbackActions;
