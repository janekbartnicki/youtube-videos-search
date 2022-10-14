import React from 'react';

export default function VideoDetail({video}) {
    if(!video) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className='ui segment'>
                <div className='ui embed'>
                    <iframe src={videoSrc} title={video.title}></iframe>
                </div>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );

}
