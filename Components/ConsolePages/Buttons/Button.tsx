import React from 'react';
type Props = {
    className?: string;
    children?: string;
    id?:string;
    form?:any;
    type?:any;
}
const Button: React.FC<Props> = ({className,children,id,form,type,...props})=>{
    return (
        <>
        <button className={className} form={form} id={id} type={type}>{children}</button>
        </>
    );
};

export default Button;