"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="py-12 bg-black relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <div className="font-bold text-xl">
                <span className="gradient-text">Zero</span>
                <span>Bot</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Automate your trading with ZeroBot, the intelligent intraday trading bot for Zerodha.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FiGithub />, href: "https://github.com/MaanavKrishna/ZeroBot" },
                { icon: <FiTwitter />, href: "#" },
                { icon: <FiLinkedin />, href: "#" },
                { icon: <FiMail />, href: "#" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              {[
                { name: "Features", href: "#features" },
                { name: "How it Works", href: "#how-it-works" },
                { name: "Pricing", href: "#" },
                { name: "Documentation", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { name: "Blog", href: "#" },
                { name: "Tutorials", href: "#" },
                { name: "Support", href: "#" },
                { name: "API", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Contact", href: "#" },
                { name: "Press Kit", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ZeroBot. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {[
              { name: "Privacy Policy", href: "#" },
              { name: "Terms of Service", href: "#" },
              { name: "Cookie Policy", href: "#" },
            ].map((link, index) => (
              <Link key={index} href={link.href} className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>ZeroBot is not affiliated with Zerodha. Zerodha and KiteConnect are trademarks of Zerodha Broking Ltd.</p>
          <p className="mt-1">Trading involves risk. Past performance does not guarantee future results.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 