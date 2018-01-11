import React from 'react';
import { Link } from 'react-router-dom';

class GameshelfShowItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <li>Title</li>
          <li>Year</li>
          <li>Rating</li>
          <li>Platform</li>
        </div>
        <Link to={`/games/${this.props.game.id}`}>
          <img src={this.props.game.cover_img_url}/>
          <div>
            { this.props.game.title }
            { this.props.game.year }
            { this.props.game.rating}/5
            { this.props.game.platform }
          </div>
        </Link>
      </div>
    );
  }
}

export default GameshelfShowItem;
