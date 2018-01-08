import React from 'react';
import { withRouter } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 5,
      body: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.navigateToGameShow = this.navigateToGameShow.bind(this);
  }

  navigateToGameShow() {
    this.props.history.push(`/games/${this.props.match.params.gameId}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview({ rating: this.state.rating, body: this.state.body, game_id: this.props.gameId })
    .then(() => this.setState({ rating: 5, body: "" }))
    .then(() => this.props.clearReviewErrors())
    .then(() => this.navigateToGameShow());
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const gameId = parseInt(this.props.match.params.gameId);
  //   const review = Object.assign({}, this.state, { game_id: gameId });
  //   this.props.createReview({ review });
  //   this.navigateToGameShow();
  // }

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.gameId);
    this.props.clearReviewErrors();
  }

  componentWillMount() {
    this.props.fetchReviews(this.props.match.params.gameId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.gameId !== nextProps.match.params.gameId) {
      this.props.fetchReviews(nextProps.match.params.gameId);
    }
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

   renderReviewForm() {
     if (this.props.currentUser) {
       return (
         <div>
           <div className="review-header">Leave a Review</div>
           <form onSubmit={this.handleSubmit} id="form" class="topBefore">
  		        <input className="review-input" id="rating" type="number" placeholder="My Rating:" value={this.state.rating} onChange={this.update("rating")} />
  		        <textarea className="review-textarea" required id="review" type="text" value={this.state.body} onChange={this.update("body")} placeholder="What did you think of this game?"></textarea>
              <input className="review-input" id="submit" type="submit" value="SAVE" />
            </form>
          </div>
       )
       // return (
       //   <div className="review-form">
       //     <form onSubmit={this.handleSubmit}>
       //       <label>My Rating: </label>
       //       <input
       //         type="number"
       //         value={this.state.rating}
       //         onChange={this.update("rating")}
       //       />
       //
       //       <label className="review-input">What did you think?
       //
       //       <textarea required
       //         value={this.state.body}
       //         placeholder="Enter your review"
       //         onChange={this.update("body")}
       //       />
       //      </label>
       //      <input className="login-btn" type="submit" value="Save" />
       //      <h3 className="errors">{this.props.errors}</h3>
       //     </form>
       //     <button className="login-btn" onClick={this.navigateToGameShow}>Cancel</button>
       //   </div>
       // )
     }
   }

  render() {
    debugger
    const { reviews, deleteReview, currentUser, updateReview, clearReviewErrors } = this.props;
    return (
      <div>
        <ul>{ this.renderReviewForm() }</ul>
        <div className="community-review-header">
          <p>Community Reviews</p>
        </div>
        <div className="reviews">
          <div>{ reviews.map(review => <ReviewIndexItem key={review.game_id} review={review} deleteReview={deleteReview} currentUser={currentUser} clearReviewErrors={clearReviewErrors} />)}</div>
        </div>
      </div>
    )
  }
}

export default withRouter(ReviewIndex);
