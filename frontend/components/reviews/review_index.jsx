import React from 'react';
import ReviewIndexItem from './review_index_item';
import { clearReviewErrors } from '../../actions/review_actions';

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
    this.props.createReview({
      body: this.state.body,
      game_id: this.props.gameId,
    }).then(() => this.setState({
      body: ""
    })).then(() => this.clearReviewErrors());
  }

  componentDidMount() {
    if (this.props.gameId) {
      this.props.fetchReviews(this.props.gameId);
    }
    this.props.clearReviewErrors();
  }

  componentWillUnmount() {
    this.props.clearReviewErrors();
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
     )
   }
  //
  // render() {
  //   debugger
  //   reviews = this.props.game.review_ids.map(id => {
  //   return (
  //     <div>
  //       <ul>
  //         <ReviewIndexItem key={id} review={this.props.reviews[id]} />
  //       </ul>
  //     </div>
  //   )
  //   })
  //
  //   return (
  //     <div>
  //       <h2>Reviews</h2>
  //       { reviews }
  //     </div>
  //   )
  // }

  render() {
    return (
      <div>
        <h2>Reviews</h2>
        { this.renderReviewForm() }
      </div>
    )
  }
}

export default ReviewIndex;
