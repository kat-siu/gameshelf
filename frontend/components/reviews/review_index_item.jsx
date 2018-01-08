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
    this.props.deleteReview(this.props.review.id).then((errors) => this.props.clearErrors(errors));
  }

  deleteReview() {
    if (this.props.currentUser.id === this.props.review.user_id) {
      return <button onClick={this.handleDelete}>Delete</button>
    }
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  renderReview() {
    debugger
    const { review, deleteReview } = this.props;
    return (
      <ul>
        <li>{ review.rating }</li>
        <li>{ review.user_id.name }</li>
        <li>{ review.body }</li>
        <li>{ this.deleteReview() }</li>
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
