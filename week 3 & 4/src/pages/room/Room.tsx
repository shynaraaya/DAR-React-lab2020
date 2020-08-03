import React from 'react';
import YouTube from 'react-youtube';
import { Chat } from '../chat/Chat';

import './Room.scss';
import { UserContext } from '../../App';

export const Room: React.FunctionComponent = () => {
    const onPlayerReady = ({target}: any) => {
        target.playVideo();
    };

    return (
        <div className="Room">
            <YouTube videoId={'yimlIZEJwPY'} containerClassName="Video" onReady={onPlayerReady}/>
            <UserContext.Consumer>
                {
                    ({user}) => <Chat user={user}/>
                }
            </UserContext.Consumer>

        </div>
    );
};
