// import Button from "..//Buttons/Button"
// import CloseButton from "../Components/Buttons/CloseButton"
// import DangerButton from "../Components/Buttons/DangerButton"
// import FilterButton from "../Components/Buttons/FilterButton"
// import FilterButtonWithLongText from "../Components/Buttons/FilterButtonWithLongText"
// import IconButton from "../Components/Buttons/IconButton"
// import IconWithLetter from "../Components/Buttons/IconWithLetter"
// import IconWithText from "../Components/Buttons/IconWithText"
// import PrimaryButtonWithLongText from "../Components/Buttons/PrimaryButtonWithLongText"
// import SearchAndFilterInput from "../Components/Inputs/SearchAndFilterInput"
// import DateRangePicker from "../Components/Buttons/DateRangePicker"
// import { useState } from "react"

// const DashBoard = () => {
//   const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null)
//   const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null)

//   const handleDateRangeChange = (startDate: Date, endDate: Date) => {
//     setSelectedStartDate(startDate)
//     setSelectedEndDate(endDate)
//   }
//   return (
//     <>
//       <IconButton className="ops-icon ic-more-vertical"> </IconButton>
//       <IconButton className="ops-icon ic-edit"> </IconButton>
//       <IconButton className="ops-icon ic-print"> </IconButton>
//       <IconButton className="ops-icon ic-delete"> </IconButton>
//       <IconButton className="ops-icon ic-mail2"> </IconButton>
//       <IconButton className="ops-icon ic-download"> </IconButton>
//       <CloseButton className="ops-icon ic-close"></CloseButton>
//       <CloseButton className="ops-icon ic-check-alt color:primary"></CloseButton>
//       <IconWithLetter>+ New</IconWithLetter>
//       <FilterButton className="ops-icon ic-dropdown-outline">
//         Filter By
//       </FilterButton>
//       <FilterButtonWithLongText className="ops-icon ic-dropdown-outline">
//         This Finacial Year
//       </FilterButtonWithLongText>
//       <FilterButton className="ops-icon ops-icon ic-close">
//         10 Selected
//       </FilterButton>
//       <DangerButton>Delete Selected</DangerButton>
//       <Button className="btn btn-primary">Save</Button>
//       <PrimaryButtonWithLongText className="ops-icon ic-dropdown-outline">
//         New Transaction
//       </PrimaryButtonWithLongText>
//       {/* <SearchAndFilterInput></SearchAndFilterInput> */}
//       <IconWithText
//         className="ops-icon ic-bank"
//         text="Total Sales"
//         children="AED 914,423.00"
//       />
//       <DateRangePicker onChange={handleDateRangeChange} />
//     </>
//   )
// }
// export default DashBoard
