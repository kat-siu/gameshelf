import { combineReducers } from 'redux';
import SignupErrorsReducer from './signup_errors_reducer';
import LoginErrorsReducer from './login_errors_reducer';

// const ErrorsReducer = combineReducers({
//   session: SessionErrorsReducer,
// });

const ErrorsReducer = combineReducers({
  signup: SignupErrorsReducer,
  login: LoginErrorsReducer,
});

export default ErrorsReducer;
