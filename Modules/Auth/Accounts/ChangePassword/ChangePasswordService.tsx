import {  useLocation, useNavigate } from "react-router-dom";
import ChangePasswordLogic, {ChangePasswordFormModel} from "./ChangePasswordLogic";
// import axios from "axios";
// import decodePayload from "../../../../Utils/decodeToken";
const ChangePasswordService = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const host = location.pathname.split("/")[2];
    let path = " ";
    if (host === "welcomepage") {
      path = "/auth/welcomepage";
    } else {
      path = "/auth/home";
    }

   const token = localStorage.getItem("credentials");
  //  const decoded = decodePayload(token);
    //const name=localStorage.getItem("userName");

    const handleSubmit = async (data: ChangePasswordFormModel)=> {
        console.log("form Submitted");
        console.log(data);
       
       // const idToUpdate= localStorage.getItem("id");
        
        return "hello";
    }

    const defaultValues = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    };

   

    return (
        <ChangePasswordLogic defaultValues={defaultValues} onSubmit={handleSubmit} />
    )
};

export default ChangePasswordService;