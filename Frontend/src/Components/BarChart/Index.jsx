import { TrendingUp } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const chartData = [
  { day: "Mon",    'Job Views': 186, 'Job Applied': 80 },
  { day: "Tue",   'Job Views': 305, 'Job Applied': 200 },
  { day: "Wed", 'Job Views': 237, 'Job Applied': 120 },
  { day: "Thu",  'Job Views': 73,  'Job Applied': 190 },
  { day: "Fri",    'Job Views': 209, 'Job Applied': 130 },
  { day: "Sat",  'Job Views': 214, 'Job Applied': 140 },
  { day: "Sun",    'Job Views': 214, 'Job Applied': 140 },
];

export default function MyBarChart() {
  return (
    <div className="bg-gray-100  rounded p-4  ">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Vertical Stacked Bar Chart</h2>
        <p className="text-sm text-gray-600">Feb 21-Feb 28 </p>
      </div>

      {/* Chart Container */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 10, right:5, bottom: 10, left: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* Bottom segment: "Job Views" */}
            <Bar
              dataKey="Job Applied"
              stackId="a"
              fill="#4640de"
              radius={[0, 0, 4, 4]}
              barSize={34} // fixed width for the bar
            />
            {/* Top segment: "Applied" */}
            <Bar
              dataKey="Job Views"
              stackId="a"
              fill="#feb835"
              radius={[4, 4, 0, 0]}
              barSize={34} // fixed width for the bar
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <div className="mt-4 flex flex-col items-start gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium">
          Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-gray-500">
          Showing total visitors for the last 1 week
        </div>
      </div>
    </div>
  );
}
