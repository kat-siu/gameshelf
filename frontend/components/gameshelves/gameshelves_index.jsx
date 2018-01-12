import React from 'react';
import GameshelvesIndexItem from './gameshelves_index_item';

class GameshelvesIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      user_id: this.props.currentUser.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchGameshelves(this.props.currentUser)
    .then(() => this.props.clearGameshelfErrors());
  }

  showAlert() {
  return () => {
    this.msg.show('Some text or component', {
      time: 2000,
      type: 'success',
    });
  };
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

  render() {
    const { gameshelves, deleteGameshelf, currentUser, createGameshelf, updateReview } = this.props;
      return (
        <div className="gameshelf-box">
          <div>Gameshelves:</div>

          <ul>
            { gameshelves.map(gameshelf =>
              <GameshelvesIndexItem className="individual-gameshelves" key={gameshelf.id} gameshelf={gameshelf} createGameshelf={createGameshelf} deleteGameshelf={deleteGameshelf} />)}
          </ul>

          <form onSubmit={this.handleSubmit}>
            <input required
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
              placeholder="Title" />

            <input className="styled-btn"
              type="submit"
              value="Add shelf"
            />

          <p>{this.props.errors}</p>

        </form>
      </div>
    )
  }
}

export default GameshelvesIndex;
