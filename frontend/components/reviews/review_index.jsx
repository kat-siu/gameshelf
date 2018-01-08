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
    .then(() => this.props.clearReviewErrors());
  }
  // .then(() => this.navigateToGameShow());

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

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.gameId !== nextProps.match.params.gameId) {
  //     this.props.fetchReviews(nextProps.match.params.gameId);
  //   }
  // }

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
       //   <div>
       //     <div className="review-header">Leave a Review</div>
       //     <form onSubmit={this.handleSubmit} id="form" className="topBefore">
  		 //        <input className="review-input"
       //          id="rating"
       //          type="number"
       //          placeholder="My Rating:"
       //          value={this.state.rating}
       //          onChange={this.update("rating")}
       //        />
       //
       //      <textarea required
       //        className="review-textarea"
       //        id="review"
       //        type="text"
       //        value={this.state.body}
       //        onChange={this.update("body")}
       //        placeholder="What did you think of this game?">
       //      </textarea>
       //        <input className="review-input"
       //          id="submit"
       //          type="submit"
       //          value="SAVE"
       //        />
       //      <p>{this.props.errors}</p>
       //      </form>
       //    </div>
       // )

       <div>
         <div className="review-header">Leave a Review</div>
         <form onSubmit={this.handleSubmit} id="form" className="topBefore">
           <fieldset className="review-input">
             <div className="rating-form-title">
               My Rating:
             </div>
             <input type="radio" id="star5" name="rating" value="5" onChange={this.update("rating")} /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
             <input type="radio" id="star4" name="rating" value="4" onChange={this.update("rating")} /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
             <input type="radio" id="star3" name="rating" value="3" onChange={this.update("rating")} /><label class = "full" for="star3" title="Meh - 3 stars"></label>
             <input type="radio" id="star2" name="rating" value="2" onChange={this.update("rating")} /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
             <input type="radio" id="star1" name="rating" value="1" onChange={this.update("rating")} /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
           </fieldset>

         <textarea required
           className="review-textarea"
           id="review"
           type="text"
           value={this.state.body}
           onChange={this.update("body")}
           placeholder="What did you think of this game?">
         </textarea>
           <input className="review-input"
             id="submit"
             type="submit"
             value="SAVE"
           />
         <p>{this.props.errors}</p>
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
          <div className="review">{ reviews.map(review => <ReviewIndexItem className="individual-reviews" key={review.gameId} review={review} deleteReview={deleteReview} currentUser={currentUser} clearReviewErrors={clearReviewErrors} />)}</div>
        </div>
      </div>
    )
  }
}

export default withRouter(ReviewIndex);
