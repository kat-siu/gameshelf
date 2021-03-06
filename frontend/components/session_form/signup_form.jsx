import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
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

  renderErrors() {
    debugger
    return(
      <ul className="signup-errors-list">
        {this.props.errors.map((error, i) => (
          <li className="signup-errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
   }

  render() {
    return (
      <div className="signup-form-box">
        <div className="signup-form">
          <form onSubmit={this.handleSubmit}>
            <p className="signup-header">New here? Create an account!</p>
            <label>
              <input required
                className="signup-input"
                type='text'
                value={this.state.name}
                placeholder="Name"
                onChange={this.update('name')}
                />
            </label>
            <label>
              <input required
                className="signup-input"
                type='email'
                value={this.state.username}
                placeholder="Email address"
                onChange={this.update('username')}
                />
            </label>
            <label>
              <input required
                className="signup-input"
                type='password'
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                />
            </label>
            {this.renderErrors()}
            <input
              className="signup-btn"
              type='submit'
              value='Sign Up'
            />
          </form>
        </div>
      </div>
    )
  }
};

export default withRouter(SignupForm);
