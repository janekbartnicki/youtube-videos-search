import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

// export default class App extends Component {

//     state = {videos: [], selectedVideo: null};

//     componentDidMount() {
//         this.onTermSubmit('React in 100 seconds')
//     }
    
//     onTermSubmit = async term => {
        // const response = await youtube.get('/search', {
        //     params: {
        //         q: term
        //     }
        // });

//         this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
//     }

//     onVideoSelect = video => {
//         this.setState({selectedVideo: video})
//     }

//     render() {
//         return (
//             <div className='ui container' style={{marginTop: '2%'}}>
//                 <SearchBar onFormSubmit={this.onTermSubmit}/>
//                 <div className='ui grid'>
//                     <div className='ui row'>
//                         <div className='eleven wide column'>
//                             <VideoDetail video={this.state.selectedVideo}/>
//                         </div>                       
//                         <div className='five wide column'>
//                             <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
//                         </div>                       
                        
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

//HOOK-BASED REFACTOR
export default function App() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('React in 100 seconds');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]) 
    
    return (
        <div className='ui container' style={{marginTop: '2%'}}>
            <SearchBar onFormSubmit={search}/>
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={selectedVideo}/>
                    </div>                       
                    <div className='five wide column'>
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
                    </div>                       
                    
                </div>
            </div>
        </div>
    )
}