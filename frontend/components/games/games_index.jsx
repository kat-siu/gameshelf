import React from 'react';
import GameIndexContainer from './game_index_container';

class GamesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    const games = this.props.games.map(game = {
      return <GameIndexItem key={game.id} game={game} />
    });
    return (
      <div>
        <ul>
          { games }
        </ul>
      </div>
    )
  }
}

export default GamesIndex;
