import React from 'react';
import GameshelvesIndexContainer from './gameshelves_index_container';
import GameshelfShowItem from './gameshelf_show_item';
import GameShowContainer from '../games/game_show_container';

class GameshelfShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGameshelves(this.props.currentUser);
  }

  render() {
    if (this.props.gameshelf) {
      return (
        <div>
          <div>
            <GameshelvesIndexContainer />
          </div>
          <table class="pure-table pure-table-horizontal">
            <thead>
              <tr className="gameshelf-titles">
                <th>Cover</th>
                <th>Title</th>
                <th>Year</th>
                <th>Platform</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {this.props.gameshelf.games.map((game, idx) => <GameshelfShowItem key={game.id} game={game} />)}
              </tr>
            </tbody>
          </table>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default GameshelfShow;
