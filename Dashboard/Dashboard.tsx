import { FC } from "react";
import Sidebar from "../Components/Dashboard/Navbar/Sidebar";
import MainTable from "../Components/MainTable/MainTable";


const data = [
    {
      "Service Name": 1,
      category: "Residency",
      Rate: "AED 10",
      Tax: "0.00%",
    },
    {
      "Service Name": 2,
      category: "Residency",
      Rate: "AED 10",
      Tax: "0.00%",
    },
    {
      "Service Name": 3,
      category: "Residency",
      Rate: "AED 10",
      Tax: "0.00%",
    },
    {
      "Service Name": 4,
      category: "Residency",
      Rate: "AED 10",
      Tax: "0.00%",
    },
    {
      "Service Name": 5,
      category: "Residency",
      Rate: "AED 10",
      Tax: "0.00%",
    },
    {
      "Service Name": 6,
      category: "Residency",
      Rate: "AED 10",
      Tax: "0.00%",
    },
    {
      "Service Name": 7,
      category: "Residency",
      Rate: "AED 10",
      Tax: "0.00%",
    },
    {
      "Service Name": 8,
      category: "Residency",
      Rate: "AED 10",
      Tax: "0.00%",
    },
    {
      "Service Name": 9,
      category: "Residency",
      Rate: "AED 10",
      Tax: "0.00%",
    },
    {
      "Service Name": 10,
      category: "Residency",
      Rate: "AED 10",
      Tax: "0.00%",
    },
    {
      "Service Name": 11,
      category: "Residency",
      Rate: "AED 10",
      Tax: "0.00%",
    },
  ];
    

  
  

const Dashboard:FC = () =>{
    return(
        <div>
           <MainTable data={data}/>
        </div>
    )


}

export default Dashboard;