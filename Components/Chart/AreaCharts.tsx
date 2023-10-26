import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 100,
  },
  {
    name: "Feb",
    uv: 85,
  },
  {
    name: "Mar",
    uv: 90,
  },
  {
    name: "Apr",
    uv: 110,
  },
  {
    name: "May",
    uv: 120,
  },
  {
    name: "Jun",
    uv: 110,
  },
  {
    name: "Jul",
    uv: 85,
  },
  {
    name: "Aug",
    uv: 90,
  },
  {
    name: "Sep",
    uv: 95,
  },
  {
    name: "Oct",
    uv: 110,
  },
  {
    name: "Nov",
    uv: 120,
  },
  {
    name: "Dec",
    uv: 100,
  },
];

export default function AreaCharts() {
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid stroke="#F0F0F0" horizontal={true} vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <defs>
            <linearGradient
              id="paint0_linear_4858_25910"
              x1="534"
              y1="0"
              x2="534"
              y2="302"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#006BFF" stop-opacity="0.35" />
              <stop offset="1" stop-color="#006BFF" stop-opacity="0" />
            </linearGradient>
          </defs>
          {/* <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="rgb(0, 107, 255)" stopOpacity={0.35} />
            <stop offset="95%" stopColor="rgb(0, 107, 255)" stopOpacity={0.0} />
          </linearGradient>
        </defs> */}
          <YAxis
            dataKey="uv"
            axisLine={false}
            tickLine={false}
            tickCount={8}
            tickFormatter={(number) => `${number}K`}
          />
          <Tooltip />
          <Area
            type="basis"
            dataKey="uv"
            stroke="#006BFF"
            fill="url(#paint0_linear_4858_25910)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
