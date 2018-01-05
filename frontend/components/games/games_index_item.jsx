import React from 'react';
import { Link } from 'react-router-dom';

// const GamesIndexItem = props => {
//   <Link to={`/games/${props.game.id}`}>
//     <img src={props.games.id.cover_img_url} />
//   </Link>
// };

class GamesIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li>
        <Link to={`/games/${game.id}`}>
          <img src={game.cover_img_url} />
        </Link>
      </li>
    )
  }
}

export default GamesIndexItem
