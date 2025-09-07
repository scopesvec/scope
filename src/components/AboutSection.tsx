import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";

const AboutSection = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
    },
    {
      name: "Sarah Johnson",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      github: "https://github.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
    },
    {
      name: "Mike Rodriguez",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      github: "https://github.com/mikerodriguez",
      linkedin: "https://linkedin.com/in/mikerodriguez",
    },
    {
      name: "Emma Davis",
      role: "Events Coordinator",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80",
      github: "https://github.com/emmadavis",
      linkedin: "https://linkedin.com/in/emmadavis",
    },
  ];

  const facultyAdvisor = {
    name: "Dr. John Smith",
    role: "Faculty Advisor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    linkedin: "https://linkedin.com/in/johnsmith",
  };

  return (
    <section id="about" className="py-20 px-4 relative bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About SCOPE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a vibrant community of students passionate about technology,
            programming, and electronics. Our mission is to bridge the gap
            between theoretical knowledge and practical application.
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="flex"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex-1 bg-gray-900/50 border border-cyan-500/30 rounded-xl p-8 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300 h-full">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To create an innovative ecosystem where students can explore, learn,
                and build cutting-edge technology solutions that impact the world. We
                envision a future where every member becomes a tech leader and innovator.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex-1 bg-gray-900/50 border border-green-500/30 rounded-xl p-8 backdrop-blur-sm hover:border-green-400/60 transition-all duration-300 h-full">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To provide hands-on learning experiences, foster collaboration, and create
                opportunities for skill development in programming, electronics, AI/ML, and
                emerging technologies through workshops, projects, and community engagement.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Faculty Advisor Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Faculty Advisor
          </h3>
          
          <div className="flex justify-center">
            <motion.div
              className="w-64"  // Same width as team cards
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-900/50 border border-cyan-500/30 rounded-xl p-6 text-center backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 h-full flex flex-col">
                {/* Updated image container to match team members */}
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <img
                    src={facultyAdvisor.image}
                    alt={facultyAdvisor.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 hover:from-cyan-400/30 hover:to-blue-500/30 transition-all duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{facultyAdvisor.name}</h4>
                <p className="text-cyan-400 mb-4">{facultyAdvisor.role}</p>
                <div className="mt-auto pt-4">
                  <motion.a
                    href={facultyAdvisor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-green-400 hover:to-cyan-500 rounded-lg items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 mx-auto"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Leadership Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Team
          </h3>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.05 }}
                className="flex justify-center"
              >
                <div className="bg-gray-900/50 border border-cyan-500/30 rounded-xl p-6 text-center backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 w-64 h-full flex flex-col">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 hover:from-cyan-400/30 hover:to-blue-500/30 transition-all duration-300"></div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-cyan-400 mb-4">{member.role}</p>
                  <div className="mt-auto pt-4 flex justify-center space-x-4">
                    <motion.a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-cyan-400 hover:to-blue-500 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-green-400 hover:to-cyan-500 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;