import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import SignupForm from './signup_form';


const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

// const mapStateToProps = ({session}) => {
//   return {
//     currentUser: session.currentUser,
//     loggedIn: Boolean(session.currentUser),
//     errors: session.errors.signup
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));
