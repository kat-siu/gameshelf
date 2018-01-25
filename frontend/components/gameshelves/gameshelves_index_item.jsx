import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class GameshelvesIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.renderDelete = this.renderDelete.bind(this);
  }

  // attempt toggle edit form here?

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteGameshelf(this.props.gameshelf);
  }

  renderDelete(title) {
    const default_shelves = ["Played", "Currently Playing", "Want to Play"];
    if ( !default_shelves.includes(title)) {
      return (
        <button onClick={this.handleDelete}>
          <img src="https://s3.us-east-2.amazonaws.com/gameshelf/delete.png" className="icon-trash" width="20px" />
        </button>
      )
    }
  }
  // <i className="icon-fixed-width icon-trash"></i>

  // logic - if a game is in a shelf, render button to delete and not add to shelf button
  // array - can do game.includes(this.props.game)

  render() {
    return (
      <ul>
        <Link to={`/gameshelves/${this.props.gameshelf.id}`}>
          { this.props.gameshelf.title } ({ this.props.gameshelf.games.length })
        </Link>
        {this.renderDelete(this.props.gameshelf.title)}
      </ul>
    )
  }

}

export default GameshelvesIndexItem;
