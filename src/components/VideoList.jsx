import React from 'react';
import VideoItem from './VideoItem';

export default function VideoList({videos, onVideoSelect}) {
    const videosList = videos.map(video => {
        return (
            <div className='ui relaxed divided list' key={video.id.videoId}>
                <VideoItem onVideoSelect={onVideoSelect} video={video}/>
            </div>
        );
    });

    return <div>{videosList}</div>
}