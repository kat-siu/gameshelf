import React from 'react';
import { Link } from 'react-router-dom';
// import Loader from 'react-loaders';


class GameShow extends React.Component {

  componentDidMount() {
    this.props.fetchGame(this.props.match.params.gameId);
  }

  render() {

    return (
      <div className="game-show-box">
        <Link to="/games">&lt;&lt; Back to all games</Link>
        <div classname="game-details">
          <div><h2>{this.props.game.title} ({this.props.game.year})</h2></div>
          <div><img src={`${this.props.game.cover_img_url}`} /></div>
          <div><b>Platform:</b> {this.props.game.platform}</div>
          <div><b>Description:</b> {this.props.game.description}</div>
        </div>
      </div>
    )
  }
}

export default GameShow;
