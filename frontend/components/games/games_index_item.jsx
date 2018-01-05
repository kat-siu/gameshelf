import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const GamesIndexItem = props => {
  return (
    <li key={`${props.game.id}`}>
      <Link to={`/games/${props.game.id}`}>
        <img className='game-index-img' src={`${props.game.cover_img_url}`} />
      </Link>
    </li>
  )
}

export default GamesIndexItem;
