import React, { useState, useEffect } from "react";
import { motion} from "motion/react";
import {
  Code,
  Cpu,
  Users,
  MessageCircle,
} from "lucide-react";
import { Card } from "./ui/card";
const DivisionsSection = () => {
  const divisions = [
    {
      title: "Programming & AI/ML",
      description:
        "Dive into software development, machine learning, and artificial intelligence",
      icon: <Code className="w-8 h-8" />,
      color: "from-cyan-400 to-blue-500",
      borderColor:
        "border-cyan-500/30 hover:border-cyan-400/60",
    },
    {
      title: "Electronics & IoT",
      description:
        "Explore hardware design, embedded systems, and Internet of Things",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-green-400 to-cyan-500",
      borderColor:
        "border-green-500/30 hover:border-green-400/60",
    },
    {
      title: "Creative & Media",
      description:
        "Design, multimedia, and digital content creation",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-400 to-pink-500",
      borderColor:
        "border-purple-500/30 hover:border-purple-400/60",
    },
    {
      title: "Content Writers",
      description:
        "Technical writing, documentation, and knowledge sharing",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "from-orange-400 to-red-500",
      borderColor:
        "border-orange-500/30 hover:border-orange-400/60",
    },
  ];

  return (
    <section id="divisions" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Divisions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore different areas of expertise and find your
            passion in technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {divisions.map((division, index) => (
            <motion.div
              key={division.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                className={`bg-gray-900/50 ${division.borderColor} p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg group`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${division.color} rounded-lg flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {division.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {division.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {division.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;