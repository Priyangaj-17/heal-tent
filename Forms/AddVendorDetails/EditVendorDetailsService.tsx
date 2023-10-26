//import { LoginFormModel } from "../../Login/LoginFormLogic";

import VendorFormLogic, { VendorFormModel } from "./EditVendorDetailsLogic";


const VendorFormService = () => {
    const handleSubmit = async (data: VendorFormModel)=> {
        console.log("form Submitted");
        console.log(data);
        return "Hello";
    }

    const defaultValues = {
        name:{title:'',firstname:'',lastname:""},
        email:"",
        phonenumber:"",
        otherdetails:{designation:"",department:""}
    };
    return (
        <VendorFormLogic defaultValues={defaultValues} onSubmit={handleSubmit} />
    )

};

export default VendorFormService;