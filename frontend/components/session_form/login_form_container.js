import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
