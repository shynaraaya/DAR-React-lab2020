import React from 'react';

type Props = {
    onClick?: () => void;
    className: string;
    text: string;
}

const Button: React.FunctionComponent<Props> = ({onClick, className, text}) => {

    const clickHandler = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
        <button className={className} onClick={clickHandler}>{text}</button>
    );
}

export default Button;
