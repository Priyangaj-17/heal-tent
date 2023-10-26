import React, { ChangeEvent, useState } from 'react';

interface CommonInputProps {
    label: string;
    htmlFor?: string;
    labelCLassName?: string;
    type: string;
    inputClassName?: string;
    value?: any;
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    register?: any;
    autoComplete?: string;

}

const InputBox: React.FC<CommonInputProps> = ({ 
    label, 
    htmlFor, 
    labelCLassName, 
    type, 
    inputClassName, 
    value, 
    placeholder, 
    onChange, 
    register, 
    autoComplete }) => {

    return (
        <>
            <label htmlFor={htmlFor} className={labelCLassName}>{label}</label>
            <input
                type={type}
                className={inputClassName}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoComplete={autoComplete}
                {...register}
            />
        </>
    );
};

export default InputBox;








