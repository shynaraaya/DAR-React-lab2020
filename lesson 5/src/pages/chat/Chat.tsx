import React, { useState, useEffect, useReducer, useContext } from 'react';

import './Chat.scss';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';
import { useWebSocket, chatStateReducer, ChatActions } from '../../services/chat';
import { ChatMessages } from './chat-messages/ChatMessages';
import { UserInfo } from '../../types/interfaces';
import Picker from 'emoji-picker-react';



type Props = {
    user?: UserInfo | null;
}

interface Emoji {
    onClick: Function;
}


export const Chat: React.FunctionComponent<Props> = ({user}) => {
    const [state, dispatch] = useReducer(chatStateReducer, {messages: []});

    const [message, setMessage] = useState<string>('');

    const [chosenEmoji, setChosenEmoji] = useState();


    const socketClient = useWebSocket({
        userId: user?.firstname
    });

    const messageHandler = (value: string) => {
        setMessage(value);
    };

    const messageSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');
        socketClient.sendMessage(message);
    };

    const onEmojiClick = (event: any, emojiObject: any) => {
        setChosenEmoji(emojiObject);
    };

    const onMessage = ({data}: {data: string}) => {
        console.log(data);
        dispatch({
            type: ChatActions.ADD_MESSAGE,
            payload: data,
        })
    };




    useEffect(() => {
        socketClient.open();
        socketClient.eventEmitter.on('message', onMessage);

        return () => {
            socketClient.eventEmitter.off('message', onMessage);
            socketClient.close();
        }
    }, []);


    return (
        <div className="Chat">
            <ChatMessages messages={state.messages} />
            <form onSubmit={messageSubmit}>
                <div className="form-group">
                    <Input name="message" required={true} value={message} placeholder="Enter message" onChange={messageHandler} />
                </div>
                <div>
                    {chosenEmoji ? (
                        <span>You chose: {chosenEmoji.emoji}</span>
                    ) : (
                        <span>No emoji Chosen</span>
                    )}
                    <Picker onEmojiClick={onEmojiClick} />
                </div>
                <div className="btn-wrapper">
                    <Button type="submit" className="btn" text="Send" />
                </div>
            </form>
        </div>
    )
};
