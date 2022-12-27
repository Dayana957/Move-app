import './styles.scss';

const Header = () => (
    <header>
        <div className="header-container">
            <div className="movie-app">
                <span>Movie APP</span>
            </div>
            <button id="popular" className="btn_popular" type="submit">Most Popular</button>
            <button id="top_rated" className="btn_top_rated" type="submit">Top Rated</button>
            <button id="upcoming" className="btn_upcoming" type="submit">Upcoming</button>
            <div className="button-search">
                <label></label>
                <input className="ipt_search" name="search" type="text" placeholder="Search..."/>
                <button id="btn_search" className="btn_search" type="submit">Search</button>
            </div>
        </div>
    </header>
)

export default Header;
