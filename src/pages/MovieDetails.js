import React, { Component, lazy, Suspense } from "react";
import movieApp from "../services/movieApi";
import { Link } from "react-router-dom";
import routers from "../routers.js";
import { Route } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import temp from "../images/template.png";
import Loader from "../shared/Loader";

export default class ShowDetails extends Component {
  state = {
    title: "",
    backdrop_path: "",
    release_date: "",
    vote_average: "",
    overview: "",
    genres: [],
    loader: true,
  };

  componentDidMount() {
    movieApp
      .fetchMovieDetails(this.props.match.params.movieId)
      .then(({ title, backdrop_path, release_date, vote_average, overview, genres }) =>
        this.setState({ title, backdrop_path, release_date, vote_average, overview, genres, loader: false })
      )
      .catch(({ response }) => {
        if (response.status === 404) {
          return this.props.history.push("/404");
        }
        console.log(response.status, " response.status");
      });
  }

  handleBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push(routers.movies);
  };

  render() {
    const { loader, title, backdrop_path, release_date, vote_average, overview, genres } = this.state;
    const { match } = this.props;
    const MovieCast = lazy(() => import("./MovieCast" /* webpackChunkName: "MovieCast" */));
    const MovieReviews = lazy(() => import("./MovieReviews" /* webpackChunkName: "MovieReviews" */));
    return (
      <div>
        {!loader ? (
          <>
            <button type="button" className={styles.back} onClick={this.handleBack}>
              Go back
            </button>
            <h2>
              {title}({release_date.split("-")[0]})
            </h2>
            <div className={styles.description}>
              <img
                className={styles.img}
                src={backdrop_path ? `https://image.tmdb.org/t/p/w500/${backdrop_path}` : `${temp}`}
                alt={title}
                width="300"
              />
              <div>
                <p>User Score: {vote_average}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <ul>
                  {genres.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3>Aditional information</h3>
              <ul>
                <li>
                  <Link
                    to={{
                      pathname: `${match.url}/cast`,
                      state: {
                        from:
                          this.props.location.state && this.props.location.state.from
                            ? this.props.location.state.from
                            : "",
                      },
                    }}
                  >
                    Cast
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: `${match.url}/reviews`,
                      state: {
                        from:
                          this.props.location.state && this.props.location.state.from
                            ? this.props.location.state.from
                            : "",
                      },
                    }}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
            <Suspense fallback={<Loader />}>
              <Route path={routers.MovieCast} component={MovieCast} />
              <Route path={routers.MovieReviews} component={MovieReviews} />
            </Suspense>
          </>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}
