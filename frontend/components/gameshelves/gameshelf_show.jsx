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

  render() {
    if (!this.props.gameshelves) {
      return null;
    } else {
      const games = this.props.gameshelf.games;
      return (
        <div>
          <div>
            <GameshelvesIndexContainer />
          </div>

          <img className="game-cover-img" src={`${this.props.game.cover_img_url}`} />
          { this.props.game.title }
          { this.props.game.year }
          { this.props.game.rating}
          { this.props.game.platform }

          <div>
            { games.map(game => <GameshelfShowItem key={game.id} game={game} />) }
          </div>

        </div>
      )
    }
  }
}

export default GameshelfShow;
