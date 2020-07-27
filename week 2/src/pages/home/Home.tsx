import React, { useState } from 'react';
import { Hello } from '../../components/hello/hello';
import Button from '../../components/button/button';


import  './Home.scss';
import { Avatar } from '../../components/profile/photo';

export const Home: React.FunctionComponent = () => {

    const avatar = '/me.jpg';
    const [clicked, setClicked] = useState<boolean>(false);

    const [name, setName] = useState<string>('');

    const btnClickLoginHandler = () => {
        console.log('Button clicked')
        setClicked(true);
    }

    const btnClickNameHandler = () => {
        console.log('Button clicked')
        setName('Shynara');
    }

    return (
        <div className="Home">
                <div>
                    {clicked ? <Hello name={name} /> : null}
                    {name==='Shynara' ? <Avatar className="avatar" src={avatar} /> : null}
                </div>
            <div className="btn-wrapper">
                <Button className="login-btn" onClick={btnClickLoginHandler} text="Log in" />
                <Button className="login-btn" onClick={btnClickNameHandler} text="Change name" />
            </div>
        </div>
    )
}
