import React from 'react';
import { Link } from 'react-router-dom';

class GameShow extends React.Component {

  componentDidMount() {
    this.props.fetchGame(this.props.match.params.gameId);
  }

  render() {
    return (
      <div>
        <Link to="/games">Back to all games</Link>
        <ul>
          <li><h2>{this.props.game.title}</h2></li>
          <li>{this.props.game.cover_img_url}</li>
          <li>{this.props.game.year}</li>
          <li>{this.props.game.platform}</li>
          <li>{this.props.game.description}</li>
        </ul>
      </div>
    )
  }
}

export default GameShow;

// const GameShow = ({ game, gameId, fetchGame }) => {
//   const games = {
//     [gameId]: game
//   };
//
//   return (
//     <div>
//       <Link to="/games">Back to all games</Link>
//       <div>
//         <GameDetail game={game} />
//       </div>
//     </div>
//   )
// }
