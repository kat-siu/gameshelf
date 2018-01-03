import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   const formType = ownProps.location.pathname.slice(1);
//     const processForm = (formType === 'login') ? login : signup;
//     return {
//       processForm: (user) => dispatch(processForm(user)),
//       formType
//     };
//   };
//
// const mapDispatchToProps = dispatch => {
//   login: (user) => dispatch(login(user)),
//   logout: () => dispatch(logout()),
// }

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
