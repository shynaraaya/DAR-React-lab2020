import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { Chat } from '../chat/Chat';

import './Room.scss';
import { RoomHeader } from '../../components/room-header/RoomHeader';
import { UserContext } from '../../services/context';
import { useParams } from 'react-router-dom';
import { Button, PlayerControlButton } from '../../components/button/Button';

enum PlayerStates {
    PLAYING = 'PLAYING',
    PAUSED = 'PAUSED',
}

export const Room: React.FunctionComponent = () => {

    const { id } = useParams();

    const [player, setPlayer] = useState<any>(null);

    const [playerState, setPlayerState] = useState<PlayerStates>();

    const onVideoInit = (event: {target: any}) => {
        setPlayer(event.target);
    };

    const toggleVideo = () => {
        if (playerState !== PlayerStates.PLAYING) {
            player?.playVideo();
            setPlayerState(PlayerStates.PLAYING)
        }
        if (playerState === PlayerStates.PLAYING) {
            player?.pauseVideo();
            setPlayerState(PlayerStates.PAUSED)
        }
    };
    
    const plusTenSec = () => {
        player?.seekTo(player?.getCurrentTime() + 10);
    };

    const minusTenSec = () => {
        player?.seekTo(player?.getCurrentTime() - 10);
    };

    return (
        <div className="Room">
            <RoomHeader />
            <div className="room-wrapper">
                <div className="video-wrapper">
                    <YouTube videoId={id} containerClassName="Video" onReady={onVideoInit}/>
                    <div className="video-controls">
                        <PlayerControlButton type="button" svg="minusTen" clickHandler={minusTenSec} />
                        <PlayerControlButton type="button" svg={playerState !== PlayerStates.PLAYING ? 'play' : 'pause'} clickHandler={toggleVideo} />
                        <PlayerControlButton type="button" svg="plusTen" clickHandler={minusTenSec} />
                    </div>
                </div>
                <UserContext.Consumer>
                    {(value) => (
                        <Chat user={value?.user}/>
                    )}
                </UserContext.Consumer>
            </div>
        </div>

    );
};
