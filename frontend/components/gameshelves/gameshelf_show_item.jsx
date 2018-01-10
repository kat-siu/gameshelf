import React from 'react';
import { Link } from 'react-router-dom';

class GameshelfShowItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <li>
        <Link to={`/games/${this.props.game.id}`}>
          <img src={this.props.game.image_url}/>
        </Link>
      </li>
    );
  }
}

export default GameshelfShowItem;
