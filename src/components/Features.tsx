"use client";

import { motion } from "framer-motion";
import { FiCpu, FiDollarSign, FiBarChart2, FiShield, FiSettings, FiLock, FiArrowRight } from "react-icons/fi";

const featuresList = [
  {
    icon: <FiCpu className="h-6 w-6 text-blue-400" />,
    title: "Automated Trading",
    description: "Set it up once—ZeroBot trades for you automatically, executing trades based on proven strategies.",
  },
  {
    icon: <FiDollarSign className="h-6 w-6 text-green-400" />,
    title: "Smart Capital Allocation",
    description: "Intelligently distributes capital across multiple trades to diversify risk and optimize returns.",
  },
  {
    icon: <FiBarChart2 className="h-6 w-6 text-purple-400" />,
    title: "Real-Time Analytics",
    description: "Monitor your trading performance through responsive, intuitive dashboards with live updates.",
  },
  {
    icon: <FiShield className="h-6 w-6 text-red-400" />,
    title: "Risk Management",
    description: "Pre-configured stop-loss and target strategies to protect your capital and minimize losses.",
  },
  {
    icon: <FiSettings className="h-6 w-6 text-yellow-400" />,
    title: "Customizable Strategies",
    description: "Choose from built-in strategies or plug in your own custom trading logic to match your preferences.",
  },
  {
    icon: <FiLock className="h-6 w-6 text-cyan-400" />,
    title: "Secure Authentication",
    description: "Seamless and secure integration with Zerodha's KiteConnect API ensuring your data stays protected.",
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-500/5 to-transparent -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-gray-300 text-lg">
            ZeroBot comes packed with everything you need to automate your trading workflow
            and maximize your potential returns.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 rounded-xl hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-black to-gray-900 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/MaanavKrishna/ZeroBot/archive/refs/heads/main.zip"
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-medium px-8 py-3 rounded-lg inline-flex items-center justify-center gap-2"
          >
            Get Started <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 