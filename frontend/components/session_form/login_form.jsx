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

  handleGuestSubmit(e) {
    e.preventDefault();
    const guest = { username: "guest@gmail.com", password: "password" };
    this.props.login(guest).then(() => {
      this.props.history.push('/home');
    });
  }

  update(field) {
    return (e) => {this.setState({
      [field]: e.currentTarget.value
    });
  };
  }

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
    return (
      <div className="header">
        <div className="logo-and-form">
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
              <button className="login-btn" onClick={this.handleGuestSubmit}>Demo</button>
              <h3 className="errors">{this.props.errors}</h3>
            </form>
          </div>
        </div>
      </div>
    )
  }
};

export default withRouter(LoginForm);
