import React from 'react';

import './ChatMessages.scss';
import { ChatMessage } from '../../../types/interfaces';

type Props = {
    messages: ChatMessage[]
}

export const ChatMessages: React.FunctionComponent<Props> = ({messages}) => {
    return (
        <div className="ChatMessages">
            {
                messages && messages.map((message, idx) => {
                    const date = new Date(message.time);

                    return (
                        <div className="message-item" key={idx}>
                            <div className="message-item-header">
                                <div className="message-item-user">
                                    {message.userId.split('-')[0]}
                                </div>
                                <div className="message-item-time">
                                    {`${date.getHours()}:${date.getMinutes()}`}
                                </div>
                            </div>

                            <div className="message-item-text">
                                {message.text}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};
