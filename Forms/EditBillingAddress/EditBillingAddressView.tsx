import { useState } from "react";
import Dropdown from "../../Components/CommonComponents/DropDownBox/Dropdown";


const BillingForm = () => {

    const countries = ["India", "America", "China", "Japan", "Russia", "England"];

  const [selectedOption, setSelectedOption] = useState("");
  const handleSelect = (option: any) => {
    setSelectedOption(option);
};
  return (
    <form className="form-wrapper form flex fd-col pad-0 m-0">
      <div className="flex al-center">
            <label className="bold-400">Attention</label>
            <input placeholder="Abs"/>   
        </div>
        <div className="flex al-center">
            <label className="bold-400">Country</label> 
            <Dropdown
                      functionality="search-input"
                      data={countries}
                      onItemSelected={handleSelect}
                      dropdownwidth="23.5rem"
                      optionswidth="22rem"
                      positionTop={"31%"}


    />
        </div>
        <div className="address-container flex">
            <label className="bold-400">Address</label>
            <div className="flex fd-col">
            <textarea placeholder="North Phase Industrial Estate,42, 5th Cross St" autoComplete="none"/>
            <textarea placeholder="Kalaimagal Nagar, Ekkatuthangal"/>
            </div>    
        </div>
        <div className="flex al-center">
            <label className="bold-400">City</label>
            <input placeholder="Chennai"/>   
        </div>
        <div className="flex al-center">
            <label className="bold-400">State</label>
            <input placeholder="Tamilnadu"/>   
        </div>
        <div className="flex al-center">
            <label className="bold-400">Zip Code</label>
            <input placeholder="60001"/>   
        </div>
    </form>
  );
};

export default BillingForm;
