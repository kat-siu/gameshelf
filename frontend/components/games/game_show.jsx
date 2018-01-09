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

  componentDidMount() {
    this.props.fetchGame(this.props.match.params.gameId);
    this.props.fetchReviews();
  }

  render() {
    if (!this.props.game) {
      return null;
    } else {
    return (
        <div className="game-show-box">
            <div className="game-details">
              <div className="left-side-show">
                <div className="game-index-link"><Link to="/games">&lt;&lt; Back to all games</Link></div>
                <img className="game-cover-img" src={`${this.props.game.cover_img_url}`} />
              </div>
              <div className="right-side-show">
                <div className="game-title">{this.props.game.title} ({this.props.game.year})</div>
                <div>
                  <p className="uppercase">Platform:</p>
                  {this.props.game.platform}
                </div>
                <br /> <br />
                <div>
                  <p className="uppercase">Description:</p>
                  {this.props.game.description}
                </div>
              </div>
            </div>

            <ReviewIndexContainer className="review-form" gameId={this.props.game.id} />

        </div>
      )
    }
  }
}

export default GameShow;
