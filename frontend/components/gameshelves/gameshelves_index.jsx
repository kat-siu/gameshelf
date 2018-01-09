import React from 'react';
import GameshelvesIndexItem from './gameshelves_index_item';

class GameshelvesIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchGameshelves()
    .then(errors => this.props.clearGameshelfErrors(errors));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createGameshelf((this.state))
    .then(() => this.setState({ title: "" }))
    .then(() => this.props.clearGameshelfErrors());
  }

  update(field) {
    return (e) => {this.setState({
      [field]: e.currentTarget.value});
    };
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderGameshelf() {
    const { gameshelves, createGameshelf, deleteGameshelf, currentUser, updateReview, clearGameshelfErrors } = this.props;
    if (this.props.currentUser) {
      return (
        <div>
          <div>Gameshelves:</div>
          <form onSubmit={this.handleSubmit}>
            <input required
              type="text"
              value={this.state.title}
              onChange={this.update("title")}>
            </input>

            <input
              type="submit"
              value="Add shelf"
            />
          <p>{this.props.errors}</p>
          </form>

          <ul>
            { gameshelves.map(gameshelf => <GameshelfIndexItem className="individual-gameshelves" key={gameshelf.id} gameshelf={gameshelf} createGameshelf={createGameshelf} deleteGameshelf={deleteGameshelf} currentUser={currentUser} clearGameshelfErrors={clearGameshelfErrors} />)}
          </ul>
        </div>
      )
    }
  }
  // <ul>{this.props.gameshelves}</ul>

  render() {
    return (
      <div>
        { this.renderGameshelf() }
      </div>
    )
  }
}

export default GameshelvesIndex;
