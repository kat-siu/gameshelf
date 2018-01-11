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

  // render() {
  //   debugger
  //
  //   if (!this.props.currentUser) {
  //     console.log("hewwo");
  //   } else {
  //     const games = this.props.gameshelf.games;
  //     return (
  //       <div>
  //         <div>
  //           <GameshelvesIndexContainer />
  //         </div>
  //         <div>
  //           <h2>{gameshelf.title}</h2>
  //           <ul>
  //             {gameshelf.game_ids.map((id) =>
  //             <li key={id}>
  //               {games[id].title}
  //               <img src={games[id].cover_img_url}></img>
  //             </li>
  //           )}
  //           </ul> s
  //         )
  //       </div>
  //   }
  // }

  // loop through the gameshelf and grab the game id

  render() {
    debugger
    if (this.props.gameshelf) {
      return (
        <div>
          <div>
            <GameshelvesIndexContainer />
          </div>
          <div>
            {this.props.gameshelf.games.map((game, idx) => <GameshelfShowItem key={game.id} game={game} />)}
          </div>
        </div>
      )
    } else {
      return 'There are currently no games in this shelf.this.p';
    }
  }
}
// <img className="game-cover-img" src={`${this.props.game.cover_img_url}`} />
// { this.props.game.title }
// { this.props.game.year }
// { this.props.game.rating}
// { this.props.game.platform }
// </div>
// 

export default GameshelfShow;
