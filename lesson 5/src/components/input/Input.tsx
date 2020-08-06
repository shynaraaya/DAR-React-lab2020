import React, { useState, useEffect } from 'react'

type Props = {
    name: string;
    placeholder: string;
    value?: string;
    required?: boolean;
    onChange?: (val: string) => void;
}

export const Input: React.FunctionComponent<Props> = ({name, required, value, placeholder, onChange}) => {

    const [inputValue, setInputValue] = useState<string>('');

    const [inputChanged, setInputChanged] = useState<boolean>(false);

    const [inputError, setInputError] = useState<{isEmpty?: boolean; isInvalid?: boolean}>({});

    const changeHandler = (value: string) => {
        setInputValue(value);
        if (onChange) {
            onChange(value);
        }
    };

    useEffect(() => {

        setInputChanged(true);

        if (!inputChanged) {
            return;
        }

        if (required && !inputValue) {
            setInputError({
                isEmpty: true,
            });
            return;
        }

        if (inputValue.match(/\s/g)) {
            setInputError( {
                isInvalid: true,
                isEmpty: false,
            });
            return;
        }

        setInputError( {
            isEmpty: false,
            isInvalid: false,
        });
    }, [inputValue]);

    return (
        <div className="Input">
            <input type="text"
                   name={name}
                   className="form-control"
                   placeholder={placeholder}
                   value={value}
                   onChange={(event) => changeHandler(event.target.value)}
            />
            <div className="form-error">
                {inputError.isEmpty ? 'This field is required' : ''}
                {inputError.isInvalid ? 'Entered value is invalid' : ''}
            </div>
        </div>
    );
};
