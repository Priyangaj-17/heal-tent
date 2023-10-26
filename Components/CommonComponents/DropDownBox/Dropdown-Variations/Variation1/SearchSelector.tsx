import React, { useRef, useState } from "react";
import "./SearchSelector.scss";


const SearchSelector = ({bgcolor,children,onItemSelected,dropdownwidth,optionswidth,data,positionTop,positionBottom,positionLeft,positionRight}:any) => {

    const [isOpen,setIsOpen]= useState(false);
    const[searchText,setSearchText]= useState("");
    const [selectedOption,setSelectedOption]= useState("");
    const [isInputFocused, setIsInputFocused]= useState(false);

    const dropDownRef = useRef(null);

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option:any)=>{
        setSelectedOption(option);
        setIsOpen(false);
        setSearchText("");
        onItemSelected(option);

    }

    const filteredOptions = data?.filter((option:any)=>
    option?.toLowerCase().includes(searchText.toLowerCase()));
  return (
    <>
      <div>
        <div className="searchinput-container inl-flex fd-col w-100">
          <div className="div-input flex al-center js-spb" style={{width:dropdownwidth,backgroundColor:bgcolor}} onClick={toggleDropDown} ref={dropDownRef}>
            <span>{selectedOption || children }</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              className={isOpen ? "rotate-icon":"rotate-icon-rev"}
            >
              <path
                d="M2 2L10 10L18 2"
                stroke="#606060"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {isOpen && ( 
          <div className={`searchinput-options flex fd-col ${isOpen ? "open": ""}`} style={{top:positionTop,bottom:positionBottom,left:positionLeft,right:positionRight}} >
            <input placeholder="Search" className={`searchinput flex al-center ${isInputFocused ? "focused":""}`}
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
            onFocus={()=>setIsInputFocused(true)}
            onBlur={()=>setIsInputFocused(false)} 
            style={{width:optionswidth}} />
            <ul className="searchinput-ul flex fd-col" style={{width:"100%"}}>
                {filteredOptions?.map((option:any,index:any)=>(
                     <li key={index} className="flex al-center" onClick={()=>handleOptionClick(option)}>
                        {option}
                     </li>
                ))}
               
            </ul>
          </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchSelector;
