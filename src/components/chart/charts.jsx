import "./chart.css"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
function Charts() {

  const data = [
    {
      month: "Jan",
      ActiveUser: 4000,
      user: 2400,
      amt: 2400
    },
    {
      month: "Feb",
      ActiveUser: 3000,
      user: 1398,
      amt: 2210
    },
    {
      month: "Mar",
      ActiveUser: 7000,
      user: 9800,
      amt: 2290
    },
    {
      month: "Apr",
      ActiveUser: 2780,
      user: 3908,
      amt: 2000
    },
    {
      month: "Jun",
      ActiveUser: 1890,
      user: 4800,
      amt: 2181
    },
    {
      month: "Jul",
      ActiveUser: 2390,
      user: 3800,
      amt: 2000
    },
    {
      month: "Aug",
      ActiveUser: 3490,
      user: 4300,
      amt: 2100
    }, {
      month: "Sep",
      ActiveUser: 3000,
      user: 1398,
      amt: 2210
    },
    {
      month: "Oct",
      ActiveUser: 2000,
      user: 6800,
      amt: 2290
    },
    {
      month: "Nov",
      ActiveUser: 2000,
      user: 11800,
      amt: 2290
    },
    {
      month: "Dec",
      ActiveUser: 2000,
      user: 1800,
      amt: 2290
    },
  
    
  ];
  return (
    <div className='charts'>
      <ResponsiveContainer width="100%" aspect ={3/1} minHeight="20vh">
      <BarChart
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" stroke="#cccccc" />
      <YAxis stroke="#bfbfbf"/>
      <Tooltip />
      <Legend />
      <Bar dataKey="user"  barSize={10} stackId="a" fill="#e6f5ff" />
      <Bar dataKey="ActiveUser" stackId="a" fill="#006bb3" />
    </BarChart>
  
    </ResponsiveContainer>
      
      </div>
  )
}

export default Charts