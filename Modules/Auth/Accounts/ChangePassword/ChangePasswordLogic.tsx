import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup"

import ChangePasswordView from "./ChangePasswordView";


export interface ChangePasswordFormModel {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

const ChangePasswordFormScheme = yup.object().shape({
    currentPassword:yup.string().required("Current Password is Required"),
    newPassword: yup.string()
    
    .min(8, 'New password must be at least 8 characters'),
  confirmPassword: yup.string()
    .required('Confirm password is required')
    .oneOf([yup.ref('newPassword')], 'Passwords must match')

});

interface Props {
    defaultValues: ChangePasswordFormModel;
    onSubmit:(data:ChangePasswordFormModel)=> Promise<Response | string>;
}

const ChangePasswordLogic = ({defaultValues, onSubmit}:Props)=> {
    const form = useForm<ChangePasswordFormModel>({
        resolver:yupResolver(ChangePasswordFormScheme),
        mode:"onChange",
        defaultValues
    });

const handleSubmit = async (data:ChangePasswordFormModel)=> {
    await onSubmit(data)
    .then(()=>form.reset(data))
    .catch((err)=>console.log(err));
}

return <ChangePasswordView form={form} onSubmit={handleSubmit} />
}

export default ChangePasswordLogic;