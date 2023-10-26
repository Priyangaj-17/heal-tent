import React from 'react';
import SearchSelector from './Dropdown-Variations/Variation1/SearchSelector';

type DropdownProps = {
  bgcolor?:string;
  children?:string;
  functionality?:string;
  data?:any;
  onItemSelected?:any;
  dropdownwidth?:any;
  optionswidth?:any;
  positionTop?:any;
  positionBottom?:any;
  positionRight?:any;
  positionLeft?:any
}

const Dropdown: React.FC<DropdownProps> = ({bgcolor,children,functionality,data,onItemSelected,dropdownwidth,optionswidth,positionTop,positionBottom,positionLeft,positionRight}) => {
  let dropdownContent;

  switch(functionality) {
    case "search-input":
      dropdownContent = (
        <><SearchSelector bgcolor ={bgcolor} children={children} data={data} onItemSelected={onItemSelected} dropdownwidth={dropdownwidth} optionswidth={optionswidth} positionTop={positionTop} positionBottom={positionBottom} positionLeft={positionLeft} positionRight={positionRight}/></>
      );
      break;
      default:
        
  }
  return (
    <>
    {dropdownContent}    
    </>
  );
};

export default Dropdown;