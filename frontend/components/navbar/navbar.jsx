import React from 'react';
import { Link } from 'react-router-dom';

class navBar extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className='navbar'>
          <div className='navbar-logo'>
            <img className='navbar-logo-img' src="https://s3.us-east-2.amazonaws.com/gameshelf/logo.png" />
          </div>
          <div className='navbar-links'>
            <Link to='/games'>Browse</Link>
            <Link to='/my_games'>My Games</Link>
          </div>
          <div className='navbar-logout'>
            <h2>Welcome, {this.props.currentUser.username}!</h2>
              <button onClick={this.logoutUser}>Logout</button>
          </div>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default navBar;
