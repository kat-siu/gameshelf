import React from 'react';
import GamesByUserContainer from './games_by_user_container';
import GamesIndexItem from './games_index_item';
import GameshelvesIndexContainer from '../gameshelves/gameshelves_index_container';
import _ from 'lodash';

class GamesByUser extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGameshelves(this.props.currentUser);
  }

  render() {
    let userGameshelves = [];
    const mapGameshelves = this.props.gameshelves.map(gameshelf => {
      userGameshelves.push(gameshelf);
    });

    let userGames2 = [];
    const userGames = userGameshelves.forEach(gameshelf => {
      userGames2.push(Object.values(gameshelf.games));
    });

    const userGames3 = [].concat.apply([], userGames2);

    const userGames5 = _.uniqBy(userGames3, 'title');

    function compare(a, b) {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();

      let comparison = 0;
      if (titleA > titleB) {
        comparison = 1;
      } else if (titleA < titleB) {
        comparison = -1;
      }
      return comparison;
    }

    let userGames4;
    if (this.props.games) {
      userGames4 = null;
    } else {
    userGames4 = userGames5.sort(compare).map((game, i) => {
      return (
        <div className="no-touch">
          <div className="box">
            <div className="innerContent">
              <GamesIndexItem key={i} game={game} />
              <div className="titleBox">
                {game.title} ({game.year})
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      <section className="gameshelf-box game-index">
        <GameshelvesIndexContainer />
      </section>
      <div id="wrap">
        <h2>My Games:</h2>
        { userGames4 }
      </div>
    </div>
  )
}}

export default GamesByUser;
