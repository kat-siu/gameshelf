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

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.review.id).then(() => this.props.clearErrors());
  }

  deleteReview() {
    if (this.props.currentUser.id === this.props.review.user_id) {
      return <link onClick={this.handleDelete}>Delete</link>
    }
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  renderReview() {
    const { review, deleteReview } = this.props;
    return (
      <ul>
        <li>{ review.rating }</li>
        <li>{ review.name }</li>
        <li>{ review.body }</li>
        <li>{ this.renderDelete() }</li>
      </ul>
    )
  }

  render() {
    debugger
    return (
      <li>{ this.renderReview() }</li>
    )
  }
}



export default withRouter(ReviewIndexItem);
