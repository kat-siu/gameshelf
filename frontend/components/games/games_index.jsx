import React from 'react';
import GamesIndexItem from './games_index_item';

class GamesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    return (
      <div>
        <h2>All Games:</h2>
        <ul className="games-index">
          { this.props.games.map(game => (
              <GamesIndexItem key={game.id} game={game} />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default GamesIndex;
