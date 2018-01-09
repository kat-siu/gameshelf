import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const GameshelvesIndexItem = props => {
  return (
    <Link to={`/gameshelves/${props.gameshelves.id}`}>
      { props.gameshelves.title }
    </Link>
  )
}

export default withRouter(GameshelvesIndexItem);
