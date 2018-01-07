import { combineReducers } from 'redux';
import SignupErrorsReducer from './signup_errors_reducer';
import LoginErrorsReducer from './login_errors_reducer';
import ReviewErrorsReducer from './review_errors_reducer';

const ErrorsReducer = combineReducers({
  signup: SignupErrorsReducer,
  login: LoginErrorsReducer,
  review: ReviewErrorsReducer,
});

export default ErrorsReducer;
