import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Stats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || [];

    let call = 0;
    let text = 0;
    let video = 0;

    stored.forEach(item => {
      if (item.type === "Call") call++;
      if (item.type === "Text") text++;
      if (item.type === "Video") video++;
    });

    const chartData = [
      { name: "Call", value: call },
      { name: "Text", value: text },
      { name: "Video", value: video },
    ];

    setData(chartData);
  }, []);

  const COLORS = ["#244D3F", "#7C3AED", "#22C55E"];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      <h1 className="text-2xl font-bold mb-6">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-xl shadow p-6">

        <h3 className="font-bold  mb-4 text-[#264527]">
          By Interaction Type
        </h3>

        <div className="w-full h-[300px]">

          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>
    </div>
  );
};

export default Stats;