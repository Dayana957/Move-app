import React from "react";

import {convertData, convertRate, loadImgW200} from "../../../utils/utils";

import './styles.scss';

const MovieCard = ({ movie }) => (
    <div className="movie">
        <a href={`${movie.id}`}>
            <div className="movie-img">
                <img src={loadImgW200(movie.poster_path)} alt={movie.original_title}/>
            </div>
        </a>
        <div className="movie-content">
            <div className="movie-inform">
                <div className="movie_popularity">{convertRate(movie.vote_average)}/100</div>
                <div className="movie_release_data">{convertData(movie.release_date)}</div>
            </div>
            <div className="movie_titel">{movie.original_title}</div>
        </div>
    </div>
)

export default MovieCard;
