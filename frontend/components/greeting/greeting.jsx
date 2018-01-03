import React from 'react';
import { Link } from 'react-router-dom';

// const sessionLinks = () => (
//   <nav className='login-signup'>
//     <Link to='/login'>Login</Link>
//     &nbsp; or &nbsp;
//     <Link to='/signup'>Sign up</Link>
//   </nav>
// );
//
// const personalGreeting = (currentUser, logout) => (
//   <div>
//     <h2>Welcome, {currentUser.username}!</h2>
//     <button onClick={logout}>Log Out</button>
//   </div>
// );
//
// const Greeting = ({ currentUser, logout }) => (
//   currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
// );

// const Greeting = ({ currentUser, logout }) => (
//   if (currentUser.logged_in?) {
//     return {
//       personalGreeting(currentUser, logout)
//     }
//   }
// );

class Greeting extends React.Component {
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
            <h1>gameshelf</h1>
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

export default Greeting;
