import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/home');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user);
  }

  update(field) {
    return (e) => {this.setState({
      [field]: e.currentTarget.value
    });
  };
  }

  // navLink() {
  //   if (this.props.formType === 'login') {
  //     return <Link to='/signup'>Sign Up Here</Link>
  //   } else {
  //     return <Link to='/login'>Login Here</Link>
  //   }
  // }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    // {this.navLink()}
    return (
      <div className="signup-form-box">
        <div className="signup-form">
          <form onSubmit={this.handleSubmit}>
            New here? Create an account!
            {this.renderErrors()}
            <label>
              <input className="signup-input"
                type='email'
                value={this.state.username}
                placeholder="Email address"
                onChange={this.update('username')}
                />
            </label>
            <label>
              <input className="signup-input"
                type='password'
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                />
            </label>
          <input className="signup-btn" type='submit' value='Sign up' />
          </form>
        </div>
      </div>
    )
  }
};

export default withRouter(SignupForm);
