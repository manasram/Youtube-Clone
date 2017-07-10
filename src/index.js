import React, { Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
const API_KEY = 'AIzaSyCuDFiMe_8T81rZ_E8B-_CL_6uV7MPi3f4';




class App extends Component {

    constructor(props){
        super(props);

        this.state= {
            videos: [],
            selectedVideo: null

        };
        this.VideoSearch('Subaru Sti');

    }

    VideoSearch(term){
        YTSearch({key : API_KEY, term:term}, (videos) => {
            this.setState({
                videos :videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
    const VideoSearch= _.debounce((term) => {this.VideoSearch(term) },300);
     return (
        <div>
        <SearchBar onSearchTermChange={VideoSearch} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos= {this.state.videos} />
    </div>
    );
}
}

ReactDOM.render(<App />, document.querySelector('.container'));