import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 5,
      body: "",
      id: parseInt(this.props.review.id),
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.review) {
      this.setState({
        rating: nextProps.review.rating,
        body: nextProps.review.body,
      });
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.review.id)
    .then((errors) => this.props.clearReviewErrors(errors));
  }

  deleteReview() {
    if (this.props.currentUser.id === this.props.review.user_id) {
      return <button className="styled-btn" onClick={this.handleDelete}>Delete</button>
    }
  }

  // updateReview(e) {
  //   e.preventDefault();
  //   this.props.updateReview(this.props.review.id).then((errors) => this.props.clearReviewErrors(errors))
  // }

  // updateReview() {
  //   if ((this.props.currentUser.id === this.props.review.user_id) && this.state.updateReview) {
  //     return (
  //
  //     )
  //   }
  // }


  handleUpdate(e) {
    debugger
    e.preventDefault();
    this.props.updateReview({ id: this.state.id, rating: this.state.rating, body: this.state.body, game_id: parseInt(this.props.match.params.gameId) })
    .then(() => this.setState({ rating: 5, body: "Your review has been updated." }))
  }
  // .then((errors) => this.props.clearReviewErrors(errors));

  // showEditReviewForm() {
  //   if ( this.props.currentUser.id === this.props.review.user_id ) {
  //     this.setState({ renderEdit: this.state.renderEdit === true ? false : true })
  //   }
  // }

  renderEdit() {
    if (this.props.currentUser.id === this.props.review.user_id) {
      return (
        <div class="container">
          <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Edit</button>

          <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">

              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title">Edit Review</h4>
                </div>
                <div class="modal-body">
                  <form onSubmit={this.handleUpdate} id="form" className="topBefore">
                    <fieldset className="review-input">
                      <div className="rating-form-title">
                        My Rating:
                      </div>
                      <input type="radio" id="starmodal5" name="rating" value="5" onChange={this.editStarRating("rating")} /><label className = "full" for="starmodal5" title="Awesome - 5 stars"></label>
                      <input type="radio" id="starmodal4" name="rating" value="4" onChange={this.editStarRating("rating")} /><label className = "full" for="starmodal4" title="Pretty good - 4 stars"></label>
                      <input type="radio" id="starmodal3" name="rating" value="3" onChange={this.editStarRating("rating")} /><label className = "full" for="starmodal3" title="Meh - 3 stars"></label>
                      <input type="radio" id="starmodal2" name="rating" value="2" onChange={this.editStarRating("rating")} /><label className = "full" for="starmodal2" title="Kinda bad - 2 stars"></label>
                      <input type="radio" id="starmodal1" name="rating" value="1" onChange={this.editStarRating("rating")} /><label className = "full" for="starmodal1" title="Sucks big time - 1 star"></label>
                    </fieldset>

                  <textarea required
                    className="review-textarea"
                    id="review"
                    type="text"
                    value={this.state.body}
                    onChange={this.editStarRating("body")}
                    placeholder="What did you think of this game?">
                  </textarea>

                  <input className="review-input"
                    id="update"
                    type="submit"
                    value="UPDATE"
                  />

                  <p>{this.props.errors}</p>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      )
    }
  }

  editStarRating(field) {
    console.log("hello");
    return (e) => {this.setState({
      [field]: e.currentTarget.value});
    };
  }

  renderReview() {
    const { review, deleteReview } = this.props;
    return (
      <ul className="review-details">
        <li>{ this.renderEdit() }</li>
        <li>{ this.deleteReview() }</li>
        <li><font color="#00afcc" weight="bold">{ review.name }</font> rated it { review.rating }/5</li>
        <li>{ review.created_at.slice(0, 10) }</li><br /><br />
        <li><font face="Times New Roman">{ review.body }</font></li>
      </ul>
    )
  }

  render() {
    return (
      <li>{ this.renderReview() }</li>
    )
  }
}



export default withRouter(ReviewIndexItem);
