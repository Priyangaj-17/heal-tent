import styled from "styled-components";
import DashboardDropdown from "./DashboardDropdown";
import PieCharts from "./PieCharts";

const PieLayoutWrapper = styled.div`
  border: 2px solid #ccc;
  width: 650px;
  border-radius: 8px;
  > div:first-child {
    border-bottom: 2px solid #ccc;
    padding: 30px;
  }

  > div:nth-child(2) {
    padding: 50px 60px;
  }
`;

export const PieLayout = () => {
  return (
    <PieLayoutWrapper>
      <div>
        <DashboardDropdown
          title={"Cash Flow"}
          arr={["This Fiscal Year", "Previous Fiscal Year", "Last 12 Months"]}
        />
      </div>
      <div>
        <PieCharts />
      </div>
    </PieLayoutWrapper>
  );
};
