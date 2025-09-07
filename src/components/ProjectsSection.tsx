import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Github,
  ExternalLink,
} from "lucide-react";
const ProjectsSection = () => {
  const projects = [
    {
      title: "Smart Campus System",
      description:
        "IoT-based campus monitoring with real-time data analytics",
      tools: ["React", "Node.js", "Arduino", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Study Assistant",
      description:
        "Machine learning powered study companion for students",
      tools: ["Python", "TensorFlow", "Flask", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Robotics Control App",
      description:
        "Mobile app for controlling autonomous robots",
      tools: ["React Native", "ROS", "C++", "Firebase"],
      github: "#",
      demo: "#",
    },
    {
      title: "Smart Home Hub",
      description:
        "Complete home automation system with voice control",
      tools: ["Raspberry Pi", "Python", "MQTT", "Vue.js"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our innovative projects and see what our
            community has built
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-gray-900/50 border-cyan-500/30 p-6 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 h-full">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-green-400 hover:to-cyan-500 text-white transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ProjectsSection;