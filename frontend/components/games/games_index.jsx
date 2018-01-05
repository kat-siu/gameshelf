import React from 'react';
import GamesIndexContainer from './games_index_container';
import GamesIndexItem from './games_index_item';

class GamesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchGames();
  // }

  // render() {
  //   const games = this.props.games.map(game => {
  //     return <GamesIndexItem key={game.id} game={game} />
  //   });
  //   return (
  //     <div>
  //       <ul>
  //         { games }
  //       </ul>
  //     </div>
  //   )
  // }

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

export default GamesIndex;
