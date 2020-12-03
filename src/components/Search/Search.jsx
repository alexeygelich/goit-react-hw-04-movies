import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Search extends Component {
  PropTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { handleSubmit } = this.props;
    handleSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={value} onChange={this.handleChange} />
        <button type="submit">Search</button>
      </form>
    );
  }
}
