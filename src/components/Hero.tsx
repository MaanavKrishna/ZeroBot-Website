"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiGithub } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden hero-gradient">
      {/* Abstract animated shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-transparent blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-green-500/20 to-transparent blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/10 to-transparent blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 pt-10 sm:pt-16 lg:pt-24">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Automate Your Trading</span>
              <br /> with ZeroBot
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            The intelligent intraday trading bot for Zerodha that executes trades with precision, 
            manages your capital smartly, and provides real-time insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href="https://github.com/MaanavKrishna/ZeroBot/archive/refs/heads/main.zip"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-medium px-8 py-3 rounded-lg flex items-center justify-center gap-2"
            >
              Get Started <FiArrowRight />
            </motion.a>
            <motion.a
              href="https://github.com/MaanavKrishna/ZeroBot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium px-8 py-3 rounded-lg border border-white/20 flex items-center justify-center gap-2"
            >
              <FiGithub /> View on GitHub
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 md:mt-24 relative"
        >
          {/* Trading interface mockup */}
          <div className="glass-card relative mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-2xl border border-white/10">
            {/* Fancy top bar with market data */}
            <div className="bg-black/50 p-4 border-b border-white/10 flex items-center justify-between">
              <div className="text-green-400 font-mono text-sm flex items-center gap-4">
                <div>NIFTY <span className="text-green-400">▲ 0.75%</span></div>
                <div>BANKNIFTY <span className="text-red-400">▼ 0.32%</span></div>
                <div>SENSEX <span className="text-green-400">▲ 0.53%</span></div>
              </div>
              <div className="text-xs text-gray-400">Last Updated: 15:30 IST</div>
            </div>
            
            {/* Main trading interface mockup - stylized representation */}
            <div className="p-8 bg-gradient-to-b from-black/90 to-black/70 grid grid-cols-1 md:grid-cols-3 gap-6 h-[400px]">
              <div className="col-span-2 h-full glass-card p-4 flex flex-col">
                <div className="text-sm font-medium text-gray-300 mb-4">Trading Performance</div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-full h-[300px] bg-gradient-to-tr from-blue-500/20 to-green-500/20 rounded-lg border border-white/5 relative overflow-hidden">
                    {/* Simulated chart lines */}
                    <div className="absolute bottom-0 left-0 w-full h-[200px]">
                      <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none">
                        <path 
                          d="M0,200 L20,180 L40,190 L60,170 L80,155 L100,140 L120,150 L140,130 L160,120 L180,100 L200,110 L220,90 L240,70 L260,65 L280,55 L300,60 L320,50 L340,45 L360,30 L380,25 L400,20 L420,15 L440,25 L460,20 L480,10 L500,5"
                          fill="none"
                          stroke="#0070f3"
                          strokeWidth="2"
                        />
                        <path 
                          d="M0,200 L20,190 L40,195 L60,185 L80,175 L100,165 L120,170 L140,160 L160,155 L180,140 L200,145 L220,130 L240,120 L260,115 L280,105 L300,110 L320,100 L340,95 L360,85 L380,80 L400,75 L420,70 L440,80 L460,75 L480,65 L500,60"
                          fill="none"
                          stroke="#00c16e"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="glass-card p-4 flex-1">
                  <div className="text-sm font-medium text-gray-300 mb-2">Active Trades</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div>HDFC Bank</div>
                      <div className="text-green-400">+₹1,245</div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div>Reliance</div>
                      <div className="text-green-400">+₹892</div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div>Infosys</div>
                      <div className="text-red-400">-₹315</div>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-4 flex-1">
                  <div className="text-sm font-medium text-gray-300 mb-2">Performance</div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-400">Today&apos;s P&L</div>
                      <div className="text-green-400 font-medium">+₹2,354</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-400">Win Rate</div>
                      <div className="text-white font-medium">68%</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-400">Total Trades</div>
                      <div className="text-white font-medium">24</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 