import React, { useState, useEffect } from 'react';
import './Videos.scss';
import { Video } from '../../types/interfaces';
import { getVideos } from '../../services/api';
import { Link } from 'react-router-dom';

type Props = {

}

export const Videos: React.FunctionComponent<Props> = () => {

    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        getVideos().then(videos => setVideos(videos))
    });

    return (
        <div className="Videos">
            {
                videos.map(video => (
                    <div className="video-item" key={video.id}>
                        <Link to={'/room/'+ video.id}>{video.title}</Link>
                    </div>
                ))
            }
        </div>
    )
};
