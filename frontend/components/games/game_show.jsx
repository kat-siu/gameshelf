import React from 'react';
import { Link } from 'react-router-dom';
// import Loader from 'react-loaders';
import ReviewIndexContainer from '../reviews/review_index_container';
import GameshelvesIndexContainer from '../gameshelves/gameshelves_index_container';

class GameShow extends React.Component {
  constructor(props) {
    super(props);

    this.addToShelf = this.addToShelf.bind(this);

  }

  componentDidMount() {
    this.props.fetchGames();
    this.props.fetchGame(this.props.match.params.gameId);
    this.props.fetchReviews();
    this.props.fetchGameshelves(this.props.currentUser);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.game) {
  //     this.gameshelfIds = nextProps.game.gameshelves.map((gameshelf) => {
  //       return gameshelf.id;
  //   });
  // }}


  // make drop down for current user's shelves -- each item in drop down menu should have a click handler on createGameshelfMembership
  // gameid and shelfid needed to create shelf membership

  addToShelf(e) {
      e.preventDefault();
      this.props.createGameshelfMembership({game_id: this.props.game.id, gameshelf_id: e.currentTarget.value });
  }

  removeFromShelf(e) {

  }

  render() {
    if (!this.props.game) {
      return null;
    } else {

    const label = this.props.gameshelves.map((gameshelf) => {
      return (
        <section>
          <option key={gameshelf.id} value={gameshelf.id}>{gameshelf.title}</option>
          <button onClick={this.addToShelf} value={gameshelf.id}>Add to shelf</button>
        </section>

      )
    })

    return (
        <div className="game-show-box">
            <div className="game-details">
              <div className="left-side-show">
                <div className="game-index-link"><Link to="/games">&lt;&lt; Back to all games</Link></div>
                <img className="game-cover-img" src={`${this.props.game.cover_img_url}`} />
                <GameshelvesIndexContainer />
                {label}

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
