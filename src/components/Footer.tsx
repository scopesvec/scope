import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import Logo from "../images/logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start"
        >
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex items-center justify-center">
              <img
                    src={Logo}
                    alt="SCOPE Logo"
                    className="w-10 h-10 object-contain rounded-lg filter grayscale"
                  />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SCOPE
            </span>
          </div>
          <p className="text-gray-400">
            Student Community of Programming and Electronics
          </p>
          <p className="text-gray-500 text-sm mt-2">
            &copy; {currentYear} SCOPE. All rights reserved.
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-right"
        >
          <p className="text-gray-500 text-sm">
            Department of Electronics and Communication Engineering
          </p>
          <p className="text-gray-500 text-sm">
            Sri Vasavi Engineering College
          </p>
          <p className="text-gray-500 text-sm">
            scope.svec@gmail.com
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
