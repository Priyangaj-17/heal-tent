// import React, { useState } from "react"
// import DatePicker from "react-datepicker"
// import "react-datepicker/dist/react-datepicker.css"

// interface DateRangePickerProps {
//   onChange: (startDate: Date, endDate: Date) => void
// }

// const DateRangePicker: React.FC<DateRangePickerProps> = ({ onChange }) => {
//   const [startDate, setStartDate] = useState<Date | null>(null)
//   const [endDate, setEndDate] = useState<Date | null>(null)

//   const handleStartDateChange = (date: Date | null) => {
//     setStartDate(date)
//     onChange(date!, endDate!)
//   }

//   const handleEndDateChange = (date: Date | null) => {
//     setEndDate(date)
//     onChange(startDate!, date!)
//   }

//   return (
//     <div>
//       <DatePicker
//         showIcon
//         selected={startDate}
//         onChange={handleStartDateChange}
//         selectsStart
//         startDate={startDate}
//         endDate={endDate}
//         placeholderText="dd/mm/yyyy"
//         dateFormat="dd/MM/yyyy"
//       />
//       <DatePicker
//         showIcon
//         selected={endDate}
//         onChange={handleEndDateChange}
//         selectsEnd
//         startDate={startDate}
//         endDate={endDate}
//         dateFormat="dd/MM/yyyy"
//         placeholderText="dd/mm/yyyy"
//       />
//     </div>
//   )
// }

// export default DateRangePicker
