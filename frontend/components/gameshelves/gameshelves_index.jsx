import React from 'react';
import GameshelvesIndexItem from './gameshelves_index_item';

class GameshelvesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGameshelves();
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
   }
   
  render() {
    let gameshelves;
    if (!this.props.gameshelves) {
      gameshelves = null;
    } else {
      gameshelves = this.props.gameshelves.map(gameshelf => {
        return (
          <GameshelvesIndexItem key={gameshelf.id} gameshelf={gameshelf} />
        )
      })
    }

    return (
      <div>
        <h2>My Gameshelves:</h2>
        { gameshelves }
      </div>
    )
  }
}

export default GameshelvesIndex;
