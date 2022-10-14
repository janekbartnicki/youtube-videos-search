import React from 'react';
import VideoItem from './VideoItem';

export default function VideoList(props) {
    const videosList = props.videos.map(video => {
        return (
            <div className='ui relaxed divided list' key={video.id.videoId}>
                <VideoItem onVideoSelect={props.onVideoSelect} video={video}/>
            </div>
        );
    });

    return <div>{videosList}</div>
}