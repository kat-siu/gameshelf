import React from 'react';
import { Link } from 'react-router-dom';

class GameshelfShowItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Link to={`/games/${this.props.game.id}`}>
          <div className="gameshelf-game-img"><img src={this.props.game.cover_img_url} /></div>
          <div>
            <div className="gameshelf-game-title">{ this.props.game.title }</div>
            <div className="gameshelf-game-year">{ this.props.game.year }</div>
            <div className="gameshelf-game-rating">{ this.props.game.rating}/5</div>
            <div className="gameshelf-game-platform">{ this.props.game.platform }</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default GameshelfShowItem;
