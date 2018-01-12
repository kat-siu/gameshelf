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

  // loop through the gameshelf and grab the game id

  render() {
    debugger
    if (this.props.gameshelf) {
      return (
        <div>
          <div>
            <GameshelvesIndexContainer />
          </div>
          <table class="pure-table pure-table-horizontal">
            <thead>
              <tr>
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

// <table class="pure-table pure-table-horizontal">
//   <thead>
//     <tr>
//       <th>Cover</th>
//       <th>Title</th>
//       <th>Year</th>
//       <th>Platform</th>
//     </tr>
//     <tbody>
//       <tr>
//         <td>{this.props.gameshelf.games.map((game, idx) => <GameshelfShowItem key={game.id} game={game} />)}</td>
//       </tr>
//     </tbody>
//   </thead>
// </table>

export default GameshelfShow;
