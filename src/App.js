import MoviesPage from "./pages/MoviesPage";
import store from './store/configureStore';
import { Provider } from "react-redux";
import './App.css';

const App = () => (
    <Provider store={ store }>
        <div className="App">
            <MoviesPage />
        </div>
    </Provider>
);

export default App;
