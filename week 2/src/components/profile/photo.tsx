import React from 'react';

export const Avatar: React.FunctionComponent<{src: string, className: string}> = ({src, className}) => {
    return (
        <img className={className} src={src} alt="" />
    )
}
