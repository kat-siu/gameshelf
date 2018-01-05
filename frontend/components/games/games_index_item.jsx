import React from 'react';
import { Link } from 'react-router-dom';

class GamesIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

//   render() {
//     return (
//       <div>
//         <li>
//           <Link to={`/games/${game.id}`}>
//             <img src={this.props.games.cover_img_url} />
//           </Link>
//         </li>
//       </div>
//     )
//   }
// }
// const GamesIndexItem = ({ games }) => (
//   <div>
//     <Link to={`/books/${game.id}`}>
//       <img src={this.props.games.cover_img_url} />
//     </Link>
//   </div>
// );

  render() {
    const games = this.props.games;

    return (
      <div>
        games.map(game => {
          <Link to={`/games/${game.id}`}>
            <img src={game.cover_img_url} />
          </Link>
        });
      </div>
    )
  }
}
  // render() {
  //   const games = this.props.games;
  //   return (
  //     <div>
  //       <ul>
  //         {games.map(game =>
  //           <GamesIndexItem key={game.id} game={game} />)}
  //       </ul>
  //     </div>
  //   )
  // }

export default GamesIndexItem;
