import React, { Component } from "react";
import PropTypes from "prop-types";
import movieApp from "../services/movieApi";
import queryString from "query-string";
import Search from "../components/Search";
import FilmList from "../components/FilmList";
import Loader from "../shared/Loader";

export default class Movies extends Component {
  PropTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = {
    films: [],
    loader: false,
  };

  componentDidMount() {
    const QueryString = this.getQueryFromProps(this.props);
    if (QueryString) {
      this.setState({ loader: true });
      movieApp
        .fetchMovieWithQuery(QueryString)
        .then((data) => this.setState({ films: [...data], loader: false }))
        .catch(({ response }) => {
          if (response.status === 404) {
            return this.props.history.push("/404");
          }
          console.log(response.status, " response.status");
        });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const oldQueryString = this.getQueryFromProps(prevProps);
    const newQueryString = this.getQueryFromProps(this.props);
    if (oldQueryString !== newQueryString) {
      this.setState({ loader: true });
      movieApp
        .fetchMovieWithQuery(newQueryString)
        .then((data) => this.setState({ films: [...data], loader: false }))
        .catch(({ response }) => {
          if (response.status === 404) {
            return this.props.history.push("/404");
          }
          console.log(response.status, " response.status");
        });
    }
  }

  getQueryFromProps = (props) => queryString.parse(props.location.search).query;

  handleSubmit = (querySearch) => {
    const { history, location } = this.props;
    history.push({
      path: location.pathname,
      search: `query=${querySearch}`,
    });
  };

  render() {
    const { films, loader } = this.state;
    return (
      <>
        <Search handleSubmit={this.handleSubmit} />
        {loader ? <Loader /> : <FilmList films={films} location={this.props.location} />}
      </>
    );
  }
}
