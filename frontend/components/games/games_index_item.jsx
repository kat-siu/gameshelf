import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Tiler from 'react-image-tiler';

const GamesIndexItem = props => {
  return (

      <Link to={`/games/${props.game.id}`}>
        <img src={`${props.game.cover_img_url}`} />
      </Link>

  )
}

export default withRouter(GamesIndexItem);
