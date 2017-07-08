import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyCuDFiMe_8T81rZ_E8B-_CL_6uV7MPi3f4';

const App = () => {
    return (
        <div>
        <SearchBar />
    </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));