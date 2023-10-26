import { yupResolver } from "@hookform/resolvers/yup";
import { useForm , UseFormProps} from "react-hook-form";
import * as yup from "yup"
import VendorForm from "./EditVendorDetailsView";

export interface VendorFormModel {
    name: {
      title: string;
      firstname: string;
      lastname: string;
    };
    email: string;
    phonenumber: string;
    otherdetails: {
      designation: string;
      department: string;
    };
  }
  
  // Create a Yup schema for validation
  const VendorFormScheme = yup.object().shape({
    name: yup.object().shape({
      title: yup.string().required('Title is required.'),
      firstname: yup.string().required('First Name is required.'),
      lastname: yup.string().required('Last Name is required.'),
    }),
    email: yup.string().email('Enter a valid email address').required('Email is required.'),
    phonenumber: yup.string(),
    otherdetails: yup.object().shape({
      designation: yup.string(),
      department: yup.string(),
    }),
  });

interface Props {
    defaultValues: VendorFormModel;
    onSubmit: (data:VendorFormModel)=> Promise<Response | string >;
}

const VendorFormLogic = ({defaultValues, onSubmit}: Props) => {
    const form = useForm<VendorFormModel>({
        resolver : yupResolver(VendorFormScheme) as UseFormProps<VendorFormModel>["resolver"],
        mode:"onChange",
        defaultValues
    });

const handleSubmit = async (data: VendorFormModel)=> {
    await onSubmit(data)
    .then(()=>form.reset(data))
    .catch((err)=>console.log(err));
};

return <VendorForm form={form} onSubmit={handleSubmit} />;
};

export default VendorFormLogic;