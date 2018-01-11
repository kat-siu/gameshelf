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
    this.props.deleteReview(this.props.review.id).then((errors) => this.props.clearReviewErrors(errors));
  }

  deleteReview() {
    if (this.props.currentUser.id === this.props.review.user_id) {
      return <button className="styled-btn" onClick={this.handleDelete}>Delete</button>
    }
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.updateReview(this.props.review.id).then((errors) => this.props.clearReviewErrors(errors))
  }

  // updateReview() {
  //   if ((this.props.currentUser.id === this.props.review.user_id) && this.state.updateReview) {
  //     return (
  //
  //     )
  //   }
  // }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  renderReview() {
    const { review, deleteReview } = this.props;
    return (
      <ul className="review-details">
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
