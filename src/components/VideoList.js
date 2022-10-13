import React from 'react';
import VideoItem from './VideoItem';

export default function VideoList(props) {
    const videosList = props.videos.map(video => {
        return (
            <div className='ui relaxed divided list'>
                <VideoItem video={video}/>
            </div>
        );
    });

    return <div>{videosList}</div>
}