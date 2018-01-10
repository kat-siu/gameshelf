import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class GameshelvesIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  // attempt toggle edit form here?

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteGameshelf(this.props.gameshelf);
  }

  render() {
    return (
      <ul>
        <Link to={`/gameshelves/${this.props.gameshelf.id}`}>
          { this.props.gameshelf.title } ({ this.props.gameshelf.games.length })
        </Link>
        <button onClick={this.handleDelete}>
        <i className="icon-fixed-width icon-trash"></i>
        </button>
      </ul>
    )
  }

}

export default GameshelvesIndexItem;
