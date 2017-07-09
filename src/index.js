import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList'
const API_KEY = 'AIzaSyCuDFiMe_8T81rZ_E8B-_CL_6uV7MPi3f4';




class App extends Component {

    constructor(props){
        super(props);

        this.state= { videos: [] };
        YTSearch({key : API_KEY, term:'surfboards'}, (videos) => {
            this.setState({ videos });
        });
    }

    render(){

     return (
        <div>
        <SearchBar />
            <VideoList videos= {this.state.videos} />
    </div>
    );
}
}

ReactDOM.render(<App />, document.querySelector('.container'));