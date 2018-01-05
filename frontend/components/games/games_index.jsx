import React from 'react';
import GamesIndexItem from './games_index_item';

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
          <li key={game.id}>
            <GamesIndexItem game={game} />
          </li>
        )
      })
    }
    
    return (
      <div>
        <h2>All Games:</h2>
        <ul className="games-index">
          { games }
        </ul>
      </div>
    )
  }
}

export default GamesIndex;
