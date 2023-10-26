import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { name: "Travel Expense", value: 200 },
  { name: "Employee Wages", value: 700 },
  { name: "Marketing", value: 100 },
];

const COLORS = ["#006BFF", "#CCE1FF", "#aac8f1"];

export default function PieCharts() {
  return (
    <PieChart width={550} height={300}>
      <Pie
        stroke="none"
        data={data}
        cx={150}
        cy={145}
        labelLine={true}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend
        layout="vertical"
        iconSize={32}
        wrapperStyle={{ fontSize: "16px" }}
        verticalAlign="top"
        align="right"
      />
    </PieChart>
  );
}
