import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// const GamesIndexItem = props => {
//   <Link to={`/games/${props.game.id}`}>
//     <img src={props.games.id.cover_img_url} />
//   </Link>
// };

// class GamesIndexItem extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick(e) {
//     const gameId = this.props.game.id;
//     this.props.history.push(`/games/${gameId}`);
//   }
//
//   render() {
//     const { cover_img_url } = this.props.game;
//
//     return(
//       <div onClick={this.handleClick}>
//         <img src={cover_img_url} />
//       </div>
//     );
//   }
// }

const GamesIndexItem = props => {
  return (
    <li key={`${props.game.id}`}>
      <Link to={`/games/${props.game.id}`}>
        <img src={`${props.game.cover_img_url}`} />
      </Link>
    </li>
  )
}


export default withRouter(GamesIndexItem);
