import React, { useEffect } from 'react';

import { connect } from "react-redux";

import { setMovies } from "../../store/movies/actions";
import { generateMovieUrl } from "../../utils/utils";

import MoviesHomeComponent from "./component";

import './styles.scss';

const MoviesHome = ({ setMovies }) => {
    useEffect(() => {
        fetch(generateMovieUrl('popular'))
            .then(res => res.json())
            .then(data => {
                console.log("data", data.results)
                setMovies(data.results);
            });
    }, [])

    return <MoviesHomeComponent />
}

const mapDispatchToProps = {
    setMovies
}

export default connect(null, mapDispatchToProps)(MoviesHome);
