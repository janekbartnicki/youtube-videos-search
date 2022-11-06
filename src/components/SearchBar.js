import React, {useState} from 'react';

// export default class SearchBar extends Component {
//     state = {term: ''};

//     onInputChange = event => {
//         this.setState({term: event.target.value});
//     }

//     onFormSubmit = event => {
//         event.preventDefault();
//         this.props.onFormSubmit(this.state.term);
//     }

//     render() {
        // return (
        //     <div className='search-bar ui segment'>
        //         <form className='ui form' onSubmit={this.onFormSubmit}>
        //             <div className='field'>
        //                 <label>Viedo Search</label>
        //                 <input type="text" value={this.state.term} onChange={this.onInputChange}/>
        //             </div>
        //         </form>
        //     </div>
        // );
//     }
// }

//HOOK-BASED REFACTOR
export default function SearchBar({onFormSubmit}) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = event => {
        event.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className='search-bar ui segment'>
            <form className='ui form' onSubmit={handleFormSubmit}>
                <div className='field'>
                    <label>Viedo Search</label>
                    <input type="text" value={term} onChange={event => setTerm(event.target.value)}/>
                </div>
            </form>
        </div>
    );
}