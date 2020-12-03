import React, { Component } from "react";
import PropTypes from "prop-types";
import movieApp from "../../services/movieApi";
import CastItem from "./CastItem";
import Loader from "../../shared/Loader";

export default class MovieCast extends Component {
  PropTypes = {
    prop: PropTypes,
  };

  state = {
    cast: [],
    loader: true,
  };

  componentDidMount() {
    movieApp
      .fetchActorsDetails(this.props.match.params.movieId)
      .then((cast) => this.setState({ cast, loader: false }))
      .catch(({ response }) => {
        if (response.status === 404) {
          return this.props.history.push("/404");
        }
        console.log(response.status, " response.status");
      });
  }

  render() {
    const { cast, loader } = this.state;
    const casts = cast.length ? (
      <ul>
        {cast.map(({ id, profile_path, name, character }) => (
          <CastItem key={id} profile_path={profile_path} name={name} character={character} />
        ))}
      </ul>
    ) : (
      <p>No information about cast!</p>
    );
    return <>{loader ? <Loader /> : casts}</>;
  }
}
