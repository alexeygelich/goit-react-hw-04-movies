import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./FilmItem.module.css";

const FilmItem = ({ title, id, location }) => {
  return (
    <li className={styles.item}>
      <Link
        to={{
          pathname: `movies/${id}`,
          state: { from: location },
        }}
      >
        {title}
      </Link>
    </li>
  );
};

FilmItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
};

export default FilmItem;
