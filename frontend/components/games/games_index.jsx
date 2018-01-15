import React from 'react';
import GamesIndexItem from './games_index_item';
import GameshelvesIndexContainer from '../gameshelves/gameshelves_index_container';

class GamesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    let games;
    if (!this.props.games) {
      games = null;
    } else {
      games = this.props.games.map(game => {
        return (
          <div className="no-touch">
            <div className="box">
              <div className="innerContent">
                <GamesIndexItem key={game.id} game={game} />
                <div className="titleBox">
                  {game.title} ({game.year})
                </div>
              </div>
            </div>
          </div>
        )
      })
    }

    return (
      <div>
        <section className="gameshelf-box game-index">
          <GameshelvesIndexContainer />
        </section>
        <div id="wrap">
          <h2>All Games:</h2>
          { games }
        </div>
      </div>
    )
  }
}

export default GamesIndex;
