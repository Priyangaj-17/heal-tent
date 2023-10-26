import React from 'react';
import useUpdatePageMeta from '../../../../Utils/useUpdatePageMeta';
import { ChangePasswordBody, ChangePasswordWrapper } from './ChangePasswordStyles';
import Header from '../../../../Layouts/MainHeader/Header';
import ChangePasswordService from './ChangePasswordService';



const ChangePassword: React.FC = () => {

    useUpdatePageMeta({
        title:"Change Password"
    })

    return (
        <>
        <div className="main-wrapper min-h-100">
            <div className="div-wrapper">
                <ChangePasswordWrapper className="flex fd-col min-w-100 min-h-100">
                    <Header />
                    <ChangePasswordBody className="flex fd-col m-auto-rl">
                            <div className="Cp-container flex fd-col w-100 h-100">
                                <div className="Cp-title flex js-center al-center">
                                    <p className="size:4xl bold-500">Change Password</p>
                                </div>
                                <div className="Cp-form flex fd-col al-center">
                                    <ChangePasswordService />
                                </div>
                            </div>
                    </ChangePasswordBody>
                </ChangePasswordWrapper>
            </div>
        </div>
        </>
    );
};

export default ChangePassword;