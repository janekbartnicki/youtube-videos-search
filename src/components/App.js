import React, {Component} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';

export default class App extends Component {

    state = {videos: [], selectedVideo: {}};
    
    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        console.log(response.data.items);
        this.setState({videos: response.data.items});
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '2%'}}>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <br/>We found {this.state.videos.length} videos!
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}