import { RECEIVE_USER_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const SignupErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default SignupErrorsReducer;
