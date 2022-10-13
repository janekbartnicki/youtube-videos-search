import React from 'react';
import './VideoItem.css';

export default function VideoItem({video}) {
    // return <iframe src={"https://www.youtube.com/embed/" + props.videoId} title={props.title}></iframe>;
    return (
        <div className='video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <div className='content'>
                <a className='header'>
                    {video.snippet.title}
                </a>
            </div>
        </div>
    )
}