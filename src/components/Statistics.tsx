"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Demo data for charts
const performanceData = [
  { name: "Jan", value: 1200 },
  { name: "Feb", value: 1900 },
  { name: "Mar", value: 1500 },
  { name: "Apr", value: 2400 },
  { name: "May", value: 2800 },
  { name: "Jun", value: 3800 },
  { name: "Jul", value: 3500 },
  { name: "Aug", value: 4200 },
  { name: "Sep", value: 4800 },
  { name: "Oct", value: 5500 },
  { name: "Nov", value: 6700 },
  { name: "Dec", value: 7800 },
];

const tradeTypeData = [
  { name: "Momentum", value: 35 },
  { name: "Reversal", value: 25 },
  { name: "Breakout", value: 20 },
  { name: "Trend", value: 20 },
];

const winLossData = [
  { name: "Win", value: 68 },
  { name: "Loss", value: 32 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const WIN_LOSS_COLORS = ["#00C49F", "#FF8042"];

const Statistics = () => {
  return (
    <section id="statistics" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-blue-950/20 -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Proven Performance</span>
          </h2>
          <p className="text-gray-300 text-lg">
            ZeroBot&apos;s automated strategies have been backtested and optimized
            for consistent performance across market conditions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-6">Trading Performance</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={performanceData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0070f3" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#0070f3" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: "#a0aec0" }} 
                    axisLine={{ stroke: "#2d3748" }}
                  />
                  <YAxis 
                    tick={{ fill: "#a0aec0" }} 
                    axisLine={{ stroke: "#2d3748" }}
                  />
                  <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "rgba(0, 0, 0, 0.8)", 
                      border: "1px solid #4a5568",
                      borderRadius: "8px",
                      color: "#fff" 
                    }} 
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#0070f3"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
              <div>Past 12 Months</div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                <span>Cumulative P&L (₹)</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {/* Win/Loss Ratio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">Win/Loss Ratio</h3>
              <div className="flex items-center">
                <div className="w-40 h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={winLossData}
                        cx="50%"
                        cy="50%"
                        innerRadius={35}
                        outerRadius={50}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {winLossData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={WIN_LOSS_COLORS[index % WIN_LOSS_COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex-1 pl-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center">
                      <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-sm text-gray-400">Win Rate: </span>
                      <span className="ml-2 font-medium text-green-400">68%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                      <span className="text-sm text-gray-400">Loss Rate: </span>
                      <span className="ml-2 font-medium text-orange-400">32%</span>
                    </div>
                    <div className="text-sm text-gray-400 mt-2">
                      Based on the last 1,000+ trades across all strategies.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Strategy Performance */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">Strategy Distribution</h3>
              <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={tradeTypeData}
                    margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: "#a0aec0" }} 
                      axisLine={{ stroke: "#2d3748" }}
                    />
                    <YAxis 
                      tick={{ fill: "#a0aec0" }} 
                      axisLine={{ stroke: "#2d3748" }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "rgba(0, 0, 0, 0.8)", 
                        border: "1px solid #4a5568",
                        borderRadius: "8px",
                        color: "#fff" 
                      }} 
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {tradeTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {tradeTypeData.map((entry, index) => (
                  <div key={index} className="flex items-center text-xs">
                    <span 
                      className="inline-block w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></span>
                    <span className="text-gray-400">{entry.name}: {entry.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Annual Return", value: "32.4%", icon: "📈", color: "text-green-400" },
            { label: "Max Drawdown", value: "8.7%", icon: "📉", color: "text-red-400" },
            { label: "Sharpe Ratio", value: "2.8", icon: "⚖️", color: "text-blue-400" },
            { label: "Avg. Trade Duration", value: "47 min", icon: "⏱️", color: "text-purple-400" },
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">{metric.icon}</span>
                <h4 className="text-gray-300 text-sm">{metric.label}</h4>
              </div>
              <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics; 