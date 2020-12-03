import React from "react";
import PropTypes from "prop-types";
import FilmItem from "./FilmItem";

const FilmList = ({ films, location }) => {
  return (
    <ul>
      {films.map((film) => {
        return <FilmItem key={film.id} id={film.id} title={film.title || film.name} location={location} />;
      })}
    </ul>
  );
};

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

export default FilmList;
