"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp, FiArrowRight } from "react-icons/fi";

const faqs = [
  {
    question: "How does ZeroBot connect to my Zerodha account?",
    answer:
      "ZeroBot uses Zerodha's official KiteConnect API to securely connect to your account. You'll need to authorize the connection through Zerodha's login page and provide an API key. ZeroBot never stores your login credentials - it only uses the authorized session token provided by Zerodha.",
  },
  {
    question: "What trading strategies does ZeroBot use?",
    answer:
      "ZeroBot comes with multiple pre-built algorithmic strategies including momentum, mean reversion, breakout, and trend-following approaches. Each strategy is customizable with parameters like entry/exit conditions, position size, and risk limits. You can also develop custom strategies using our API.",
  },
  {
    question: "How much capital do I need to use ZeroBot?",
    answer:
      "ZeroBot is designed to work with various capital sizes. We recommend starting with at least ₹50,000 to allow for proper diversification and risk management. The platform intelligently allocates capital based on your settings and available funds.",
  },
  {
    question: "What risk management features does ZeroBot offer?",
    answer:
      "ZeroBot includes comprehensive risk management features such as per-trade stop loss, daily loss limits, maximum capital allocation per trade, position sizing rules, and volatility-based adjustments. All these parameters are customizable to match your risk tolerance.",
  },
  {
    question: "Can I run ZeroBot on my own computer?",
    answer:
      "Yes, ZeroBot can be run on your personal computer with Windows, Mac, or Linux. However, for optimal performance, we recommend running it on a VPS (Virtual Private Server) with a reliable internet connection to ensure uninterrupted trading even if your personal computer is offline.",
  },
  {
    question: "Is ZeroBot suitable for beginners?",
    answer:
      "While ZeroBot automates the trading process, we recommend that users have a basic understanding of trading concepts and the Indian stock market. The platform comes with documentation, tutorials, and pre-set configurations to help beginners get started, but some trading knowledge will help you make better decisions when configuring the bot.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black/30 -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Find answers to common questions about ZeroBot and automated trading.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <div
                className={`glass-card transition-all duration-300 overflow-hidden ${
                  activeIndex === index ? "border-blue-500/50" : ""
                }`}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  <span className="text-blue-400 ml-2">
                    {activeIndex === index ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                  </span>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <div className="border-t border-gray-800 pt-4 mt-1">
                        <p className="text-gray-400">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">
            Ready to automate your trading with ZeroBot?
          </p>
          <a 
            href="https://github.com/MaanavKrishna/ZeroBot/archive/refs/heads/main.zip"
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-medium px-8 py-3 rounded-lg inline-flex items-center justify-center gap-2"
          >
            Download ZeroBot <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 