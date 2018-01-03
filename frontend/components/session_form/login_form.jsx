import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class LoginForm extends React.Component {
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
    this.props.login(user);
  }

  update(field) {
    return (e) => {this.setState({
      [field]: e.currentTarget.value
    });
  };
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    // {this.navLink()}
    return (
      <div className="header">
        <h1>gameshelf</h1>
        <div className="login-form">
          <form onSubmit={this.handleSubmit}>
            <label>
              <input className="login-input"
                type='email'
                value={this.state.username}
                placeholder="Email address"
                onChange={this.update('username')}
                />
            </label>
            <label>
              <input className="login-input"
                type='password'
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                />
            </label>
          <input className="login-btn" type='submit' value='Sign In' />
          {this.renderErrors()}
          </form>
        </div>
      </div>
    )
  }
};

export default withRouter(LoginForm);
