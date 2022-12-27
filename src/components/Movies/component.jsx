import React from "react";

import {connect} from "react-redux";
import {convertData, convertRate, generateTitle, loadImgW200} from "../../utils/utils";
import {selectMovies} from "../../store/movies/selectors";

import Header from "../../pages/Header";
import Footer from "../../pages/Footer";
import MovieCard from "./MovieCard";

const MoviesHomeComponent = ({ movies }) => {
    console.log("render MoviesHomeComponent", movies)
    return (
        <>
            <Header/>
            <div className="popular">
                <h2 className="movie-header">{generateTitle('popular')}</h2>
                <div className="movie-flex">
                    {movies.map(movie => (<MovieCard key={movie.id} movie={movie} />))}
                </div>
            </div>
            <Footer/>
        </>
    )
}

const mapStateToProps = state => ({
    movies: selectMovies(state)
})

export default connect(mapStateToProps, null)(MoviesHomeComponent);
