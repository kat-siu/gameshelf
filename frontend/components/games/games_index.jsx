import React from 'react';
import GamesIndexItem from './games_index_item';
import GamesIndexContainer from './games_index_container';

class GamesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  // render() {
  //   const games = this.props.games.map(game => {
  //     return (
  //       <GamesIndexItem key={game.id} game={game} />
  //     )
  //   });
  // }
  render() {
    const games = this.props.games;

    games.map(game => {
      return (
        <GamesIndexItem key={game.id} game={game} />
      })
    )

    return (
      { GamesIndexItem }
    )
  }
}

// <Link to={`/games/${props.game.id}`}>
//   <img src={props.games.id.cover_img_url} />
// </Link>


export default GamesIndex;
