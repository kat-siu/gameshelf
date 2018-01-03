import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className='login-signup'>
    <Link to='/login'>Login</Link>
    &nbsp; or &nbsp;
    <Link to='/signup'>Sign up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <div>
    <h2>Welcome, {currentUser.username}!</h2>
    <button onClick={logout}>Log Out</button>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
