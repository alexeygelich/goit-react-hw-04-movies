import React from "react";
import PropTypes from "prop-types";
//import { Test } from './Review.styles';

const Review = ({ author, content }) => (
  <li>
    <h3>Author: {author}</h3>
    <p>{content}</p>
  </li>
);

Review.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Review;
