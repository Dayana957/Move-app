import { Route, Routes } from "react-router-dom";

import MoviesHome from "../../components/Movies";

import './styles.scss';

const MoviesPages = () => {
    return (
        <Routes>
            <Route path="/" element={ <MoviesHome /> }/>
        </Routes>
    )
}

export default MoviesPages;
