import React, {Component} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

export default class App extends Component {

    state = {videos: [], selectedVideo: null};
    
    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        console.log(response.data.items);
        this.setState({videos: response.data.items});
    }

    onVideoSelect = video => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '2%'}}>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
        )
    }
}