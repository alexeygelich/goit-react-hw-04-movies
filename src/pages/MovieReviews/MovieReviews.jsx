import React, { Component } from "react";
import movieApp from "../../services/movieApi";
import Review from "./Review";
import Loader from "../../shared/Loader";

export default class MovieReviews extends Component {
  state = {
    reviews: [],
    loader: true,
  };

  componentDidMount() {
    movieApp
      .fetchReviewsDetails(this.props.match.params.movieId)
      .then((data) => this.setState({ reviews: [...data], loader: false }))
      .catch(({ response }) => {
        if (response.status === 404) {
          return this.props.history.push("/404");
        }
        console.log(response.status, " response.status");
      });
  }

  render() {
    const { reviews, loader } = this.state;
    const reviewsList = reviews.length ? (
      <ul>
        {reviews.map(({ id, author, content }) => (
          <Review key={id} author={author} content={content} />
        ))}
      </ul>
    ) : (
      <p>We don't have any reviews for this movie.</p>
    );
    return <>{loader ? <Loader /> : reviewsList}</>;
  }
}
