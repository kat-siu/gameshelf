import React from 'react';
import { Link } from 'react-router-dom';

class GameshelfShowItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <tr>
          <Link to={`/games/${this.props.game.id}`}>
            <div className="gameshelf-game-img"><img src={this.props.game.cover_img_url} /></div>
            <div>
              <td className="gameshelf-game-title">{ this.props.game.title }</td>
              <td className="gameshelf-game-year">{ this.props.game.year }</td>
              <td className="gameshelf-game-rating">{ this.props.game.rating}/5</td>
              <td className="gameshelf-game-platform">{ this.props.game.platform }</td>
            </div>
          </Link>
        </tr>
      </div>
    );
  }
}

export default GameshelfShowItem;
