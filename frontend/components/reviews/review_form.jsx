import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToGameShow = this.navigateToGameShow.bind(this);
  }

  navigateToGameShow() {
    const url = `/games/${this.props.match.params.gameId}`
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    const gameId = parseInt(this.props.match.params.gameId);
    const review = Object.assign({}, this.state, {
      game_id: gameId
    });
    this.props.createReview({ review });
    this.navigateToGameShow();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <label>Rating</label>
          <br/>
          <input
            type="number"
            value={this.state.rating}
            onChange={this.update("rating")}
          />
          <br/>

          <label>Review</label>
          <br/>

          <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br/>
          <input type="submit" />
        </form>
        <button onClick={this.navigateToGameShow}>Cancel</button>
      </div>
    );
 }
}

export default withRouter(ReviewForm);
