
import { useState } from "react";
// import CustomDropdown from "../../../Components/CommonComponents/Buttons/CustomDropdown";

import { EODBody, Wholecontainer } from "./EditVendorDetailsStyles";
import VendorFormService from "./EditVendorDetailsService";
import Button from "../../Components/ConsolePages/Buttons/Button";
// import Select from "../../../Components/CommonComponents/Dropdown/Dropdown";


export default function EditVendorDetails() {

  return (
    <>
      <EODBody className="min-h-100 min-w-100"></EODBody>
      <Wholecontainer className="flex fd-col h-100 w-100">
        <div className="container flex fd-col m-auto-rl">
          <div className="top flex al-center">
            <div className="top-content flex al-center js-spb">
              <p className="m-0 bold-400">Edit Primary Contact</p>
              <div className="topright flex al-center">
              <Button className="save-btn flex js-center al-center btn btn-primary" children="save" type="submit" form="editvendordetails"/>
                {/* <div className="close flex js-center al-center"> */}
                <i
                  className=" ops-icon ic-close"
                  style={{ fontSize: "1.25rem" }}
                ></i>
              </div>
            </div>
          </div>
          <div className="body flex fd-col w-100">
            <div className="body-content form-container flex fd-col al-center pad-0 m-0 w-100">
            <VendorFormService/>
            </div>
          </div>
        </div>
      </Wholecontainer>
    </>
  );
}

