

// import { Button } from "../../Components/Dashboard/Navbar/SidebarStyles";


import Button from "../../Components/ConsolePages/Buttons/Button";
import { EODBody, Wholecontainer } from "./EditBillingAddressStyles";
import BillingForm from "./EditBillingAddressView";

export default function EditBillingAddress() {
  return (
    <>
      <EODBody className="min-h-100 min-w-100"></EODBody>
      <Wholecontainer className="flex fd-col h-100 w-100">
        <div className="container flex fd-col m-auto-rl">
          <div className="top flex al-center">
            <div className="top-content flex al-center js-spb">
              <p className="m-0 bold-400">Edit Billing Address</p>
              <div className="topright flex al-center">
              <Button className="save-btn flex js-center al-center btn btn-primary" children='Save'/>
                {/* <div className="close flex js-center al-center"> */}
                <i
                  className=" ops-icon ic-close"
                  style={{ fontSize: "1.25rem" }}
                ></i>
              </div>
            </div>
          </div>
          <div className="body">
            <div className="body-content flex fd-col">
            <div className="form-container pad-0">
               <BillingForm/>
               </div>
            </div>
          </div>
        </div>
      </Wholecontainer>
    </>
  );
}