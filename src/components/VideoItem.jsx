import React from 'react';
import './VideoItem.css';

export default function VideoItem({video, onVideoSelect}) {
    // return <iframe src={"https://www.youtube.com/embed/" + props.videoId} title={props.title}></iframe>;
    //  href={"https://www.youtube.com/embed/" + video.id.videoId}
    return (
        <div onClick={() => onVideoSelect(video)} className='video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <div className='content'>
                <p className='header'>
                    {video.snippet.title}
                </p>
            </div>
        </div>
    )
}