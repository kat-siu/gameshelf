import React from 'react';
import { Link } from 'react-router-dom';
// import Loader from 'react-loaders';
import ReviewIndexContainer from '../reviews/review_index_container';
import { fetchGames } from '../../actions/game_actions';
import { fetchReviews } from '../../actions/review_actions';


class GameShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchReviews(this.props.match.params.gameId);
  }

  componentDidMount() {
    this.props.fetchGame(this.props.match.params.gameId);
  }

  render() {
    debugger
    return (
      <div className="game-show-box">
        <Link to="/games">&lt;&lt; Back to all games</Link>
        <div className="game-details">
          <div><h2>{this.props.game.title} ({this.props.game.year})</h2></div>
          <div><img src={`${this.props.game.cover_img_url}`} /></div>
          <div><b>Platform:</b> {this.props.game.platform}</div>
          <div><b>Description:</b> {this.props.game.description}</div>
        </div>
        <ReviewIndexContainer gameId={this.props.id} />
      </div>
    )
  }
}

export default GameShow;
