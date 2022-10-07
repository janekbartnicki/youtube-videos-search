import React, {Component} from 'react';
import SearchBar from './SearchBar';

export default class App extends Component {
    state = {term: ''};

    onSearchSubmit = (term) => {
        this.setState(term);
        console.log(term);
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '2%'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}