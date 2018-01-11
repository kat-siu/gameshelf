import React from 'react';
import GameshelvesIndexContainer from './gameshelves_index_container';
import GameshelfShowItem from  './gameshelf_show_item';

class GameshelfShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGameshelves(this.props.currentUser);
  }

  // loop through the gameshelf and grab the game id

  render() {
    debugger
    if (this.props.gameshelf) {
      return (
        <div>
          <div>
            <GameshelvesIndexContainer />
          </div>
          <div className="entire-gameshelf-box">
            <div className="gameshelf-name">
              <h2>Gameshelf: {this.props.gameshelf.title}</h2>
            </div>
            <div className="gameshelf-titles">
              <li>Cover</li>
              <li>Title</li>
              <li>Year</li>
              <li>Rating</li>
              <li>Platform</li>
            </div>
            <div className="gameshelf-game-details">
              {this.props.gameshelf.games.map((game, idx) => <GameshelfShowItem key={game.id} game={game} />)}
            </div>
          </div>
        </div>
      )
    } else if (this.props.gameshelf.games === []) {
      return 'There are currently no games in this shelf';
    } else {
      return 'There are currently no games in this shelf';
    }
  }
}

export default GameshelfShow;
