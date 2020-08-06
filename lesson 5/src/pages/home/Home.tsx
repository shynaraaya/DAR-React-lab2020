import React, { useState, useRef, useEffect, useCallback, useContext } from 'react';

import { Hello } from '../../components/hello/Hello';
import { Button } from '../../components/button/Button';

import './Home.scss';
import { Input } from '../../components/input/Input';
import { useHistory } from 'react-router-dom';
import { UserInfo } from '../../types/interfaces';
import { UserContext } from '../../services/context';

interface FormError {
    isEmpty?: boolean;
    isInvalid?: boolean;
}

interface UserFormError {
    firstname: FormError;
    lastname: FormError;
}

type Props = {

}

export const Home: React.FunctionComponent<Props> = () => {


    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    const userContext = useContext(UserContext);

    const history = useHistory();

    const changeHandler = (field: string, value: string) => {
        console.log(field, value);
        const newVal = {
            ...userInfo,
            [field]: value
        };

        setUserInfo(newVal as any);
    };


    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (userInfo?.firstname) {
            userContext?.setUser(userInfo);
            history.push('/videos');
        }
    };

    return (
        <div className="Home">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <Input
                        name="firstname"
                        required={true}
                        placeholder="Enter your first name"
                        onChange={(value) => changeHandler('firstname', value)} />
                </div>
                <div className="form-group">
                    <Input
                        name="lastname"
                        placeholder="Enter your last name"
                        onChange={(value) => changeHandler('lastname', value)} />
                </div>
                <div className="btn-wrapper">
                    <Button type="submit" className="login-btn" text="Log in" />
                </div>
            </form>
        </div>
    );
};
