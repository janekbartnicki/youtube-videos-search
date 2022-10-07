import React, {Component} from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

export default class App extends Component {

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        console.log(response.data.items);
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '2%'}}>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
            </div>
        )
    }
}