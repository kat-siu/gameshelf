import React from 'react';
import { Link } from 'react-router-dom';

class GameShow extends React.Component {

  componentDidMount() {
    this.props.fetchGame(this.props.match.params.gameId);
  }

  render() {
    const game = this.props.game;

    return (
      <div>
        <Link to="/games">Back to all games</Link>
        <ul>
          <li><h2>{game.title}</h2></li>
          <li>{game.cover_img_url}</li>
          <li>{game.year}</li>
          <li>{game.platform}</li>
          <li>{game.description}</li>
        </ul>
      </div>
    )
  }
}

export default GameShow;
