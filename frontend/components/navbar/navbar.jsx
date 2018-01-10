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
        <nav>
          <ul className="nav-items">
            <li>
              <Link to='/my_games'>
                <img className='logo-img' src="https://s3.us-east-2.amazonaws.com/gameshelf/logo.png" />
              </Link>
            </li>
            <li className="nav-link"><Link to='/games'>Browse</Link></li>
            <li className="nav-link"><Link to='/my_games'>My Games</Link></li>
            <li className="nav-welcome">Welcome, {this.props.currentUser.name}!</li>
            <li className="nav-logout"><button className='logout-btn' onClick={this.logoutUser}>Sign Out</button></li>
          </ul>
        </nav>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default navBar;
