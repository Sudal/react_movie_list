import React from 'react'
import PropTypes from 'prop-types'
import "./Movie.css"

function Movie({year, title, summary, poster,genres }) {
    return <div className="movie">
 
        <img src={poster} title={title} alt={title}></img>
        <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul>{genres.map(genre=><li className="genre" >{genre}</li>)}</ul>
        <p className="summary">{summary.slice(0,140)}... </p>
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.stirng).isRequired
};

export default Movie;