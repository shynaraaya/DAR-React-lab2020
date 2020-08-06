import React from 'react';
import './Button.scss';

type Props = {
    className?: string;
    text?: string;
    type?: 'button' | 'submit' | 'reset';
    svg?: string;
    clickHandler?: () => void;
}

export const Button: React.FunctionComponent<Props> = ({text, type, className, clickHandler}) => {
    return (
        <button type={type ? type : 'submit'} className={'Button ' + className} onClick={clickHandler}>
            {text}
        </button>
    );
};

export const PlayerControlButton: React.FunctionComponent<Props> = ({svg, type, className, clickHandler}) => {
    return (
        <button type={type ? type : 'submit'} className={'Button ' + className} onClick={clickHandler}>
            {svg === 'play' ? <img src={'/play-button.svg'} alt=""/> :
                svg === 'pause' ? <img src={'/pause-button.svg'} alt=""/> :
                    svg === 'minusTen' ? <img src={'/minus-button.svg'} alt=""/> :
                       svg === 'plusTen' ? <img src={'/plus-button.svg'} alt=""/>: null}
        </button>
    );
};
