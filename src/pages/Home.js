import React, { Component } from "react";
// import PropTypes from "prop-types";
import movieApp from "../services/movieApi";
import FilmList from "../components/FilmList";
import Loader from "../shared/Loader";

export default class Home extends Component {
  state = {
    films: [],
    loader: true,
  };

  componentDidMount() {
    movieApp.fetchPopularMovie().then((films) => this.setState({ films, loader: false }));
  }

  render() {
    const { films, loader } = this.state;
    const { location } = this.props;
    return (
      <div>
        <h1>Trending today</h1>
        {loader ? <Loader /> : <FilmList films={films} location={location} />}
      </div>
    );
  }
}
