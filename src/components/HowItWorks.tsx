"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "Connect with Zerodha",
    description: "Link your Zerodha account securely through KiteConnect API. Your credentials stay with you.",
    image: "/step1.png",
  },
  {
    number: "02",
    title: "Configure Your Strategy",
    description: "Choose from pre-built trading strategies or customize parameters to match your preferences.",
    image: "/step2.png",
  },
  {
    number: "03",
    title: "Set Risk Parameters",
    description: "Define your capital allocation, stop-loss levels, and profit targets for risk management.",
    image: "/step3.png",
  },
  {
    number: "04",
    title: "Activate ZeroBot",
    description: "Start the bot and let it monitor markets, identify opportunities and execute trades automatically.",
    image: "/step4.png",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 bg-black/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Getting started with ZeroBot is simple. Follow these steps to begin
            your automated trading journey.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Steps navigation */}
          <div className="lg:w-1/3">
            <div className="glass-card p-6 sticky top-24">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`mb-6 cursor-pointer ${
                    activeStep === index 
                      ? "border-l-2 border-blue-500 pl-4" 
                      : "border-l-2 border-gray-800 pl-4 opacity-60 hover:opacity-100 transition-opacity"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="text-sm text-blue-400 font-mono mb-1">{step.number}</div>
                  <h3 className="text-lg font-medium mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </motion.div>
              ))}

              <motion.a
                href="https://github.com/MaanavKrishna/ZeroBot/archive/refs/heads/main.zip"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center gap-2 w-full mt-8"
              >
                Get Started <FiArrowRight />
              </motion.a>
            </div>
          </div>

          {/* Visual Representation */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card overflow-hidden rounded-xl border border-white/10"
            >
              <div className="p-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20">
                <div className="bg-black p-8">
                  <div className="text-2xl font-bold mb-4 flex items-center">
                    <span className="text-blue-400 font-mono mr-3">{steps[activeStep].number}</span>
                    <span>{steps[activeStep].title}</span>
                  </div>
                  <div className="mb-6 text-gray-300">
                    {steps[activeStep].description}
                  </div>
                  
                  <div className="aspect-[16/9] bg-gradient-to-br from-blue-900/20 to-green-900/20 rounded-lg flex items-center justify-center border border-white/5">
                    <div className="text-center p-8">
                      <div className="p-4 inline-block rounded-full bg-blue-500/10 mb-4">
                        <div className={`text-4xl ${
                          activeStep === 0 ? "text-blue-400" : 
                          activeStep === 1 ? "text-purple-400" : 
                          activeStep === 2 ? "text-red-400" : "text-green-400"
                        }`}>
                          {activeStep === 0 ? "🔗" : 
                           activeStep === 1 ? "⚙️" : 
                           activeStep === 2 ? "🛡️" : "🚀"}
                        </div>
                      </div>
                      <h4 className="text-xl font-medium mb-2">
                        {activeStep === 0 ? "Secure API Integration" : 
                         activeStep === 1 ? "Strategy Customization" : 
                         activeStep === 2 ? "Risk Management Setup" : "Automated Trading"}
                      </h4>
                      <p className="text-gray-400 max-w-md mx-auto">
                        {activeStep === 0 ? "ZeroBot connects securely to your Zerodha account using KiteConnect API, ensuring your credentials are never stored." : 
                         activeStep === 1 ? "Configure pre-built strategies or create custom ones with technical indicators, market conditions, and trading rules." : 
                         activeStep === 2 ? "Define maximum capital per trade, stop-loss percentages, and take-profit levels to protect your investment." : 
                         "Once activated, ZeroBot monitors the market continuously, identifies trading opportunities, and executes trades with precision."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Step indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeStep === index ? "w-8 bg-blue-500" : "bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 