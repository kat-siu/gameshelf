import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  handleChange(field) {
    return (e) => {this.setState({
      [field]: e.currentTarget.value
    });
    }
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to='/signup'>Sign Up Here</Link>
    } else {
      return <Link to='/login'>Login Here</Link>
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))};
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.navLink()}
        <form onSubmit={this.handleSubmit}>
          New here? Create an account! <br /> <br />
        <label>Username:
          <input type='text'
            value={this.state.username}
            onChange={this.handleChange('username')}
            /> <br /> <br />
        </label>
        <label>Password:
          <input type='password'
            value={this.state.password}
            onChange={this.handleChange('password')}
            />
        </label><br />
        <input type='submit' value='Submit' />
      </form>
    </div>
    )
  }
};

export default withRouter(SessionForm);
