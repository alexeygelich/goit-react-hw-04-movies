import React from "react";
import PropTypes from "prop-types";
import temp from "../../../images/template.png";

const CastItem = ({ profile_path, name, character }) => (
  <li>
    <img src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : `${temp}`} alt={name} width="150" />
    <p>{name}</p>
    <p>{character}</p>
  </li>
);

CastItem.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default CastItem;
