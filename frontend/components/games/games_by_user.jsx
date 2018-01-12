import React from 'react';
import GamesByUserContainer from './games_by_user_container';
import GamesIndexItem from './games_index_item';
import GameshelvesIndexContainer from '../gameshelves/gameshelves_index_container';


class GamesByUser extends React.Component {
  constructor(props) {
    super(props);
  }



  componentDidMount() {
    this.props.fetchGameshelves(this.props.currentUser);
  }




  render() {
    debugger




    const user_games = this.props.gameshelves.map(gameshelves => {
        for (var i = 0; i < gameshelves.games.length; i++) {
        var game = gameshelves.games[i];
        console.log(game);
          return (
            <div className="no-touch">
              <div className="box">
                <div className="innerContent">
                  <GamesIndexItem key={game.id} game={game} />
                  <div className="titleBox">
                    {game.title} ({game.year})
                  </div>
                </div>
              </div>
            </div>
          )
        }
    })

    return (
      <div>
        <section className="gameshelf-box game-index"><GameshelvesIndexContainer /></section>
        <div id="wrap">
          <h2>My Games:</h2>
          { user_games }
        </div>
      </div>
    )

  }
}

export default GamesByUser;
