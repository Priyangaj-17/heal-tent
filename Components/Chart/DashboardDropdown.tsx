import { useState } from "react";
import styled from "styled-components";

const DashboardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial;
  /* padding: 24px; */

  > div:first-child {
    color: var(--text-color-black, #2d2d2d);
    font-size: 28px;
    font-weight: 400;
  }

  > div:nth-child(2) {
    margin-bottom: 0;
    > select {
      appearance: revert !important;
      padding: 15px 18px;
      color: var(--text-color-black, #2d2d2d);
      font-size: 18px;
      font-weight: 400;
      border-radius: 5px;
      border: 1px solid var(--text-color-dark-grey, #606060);
      background: var(--white, #fff);
    }
  }
`;

const DashboardDropdown = ({ title, arr }: any) => {
  const [value, setValue] = useState("This Fiscal Year");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  console.log(value);

  return (
    <DashboardWrapper>
      <div>{title}</div>
      <div className="form-select">
        <select value={value} onChange={handleChange}>
          {arr?.map((option: any) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
    </DashboardWrapper>
  );
};

export default DashboardDropdown;
