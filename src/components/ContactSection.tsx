import React from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { MessageCircle, Instagram, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to be part of something amazing? Connect with us and stay updated with our latest projects and events.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <Card className="bg-gray-900/50 border-cyan-500/30 p-8 backdrop-blur-sm max-w-md w-full">
            <h3 className="text-2xl font-bold text-white mb-4">
              Connect With Us
            </h3>

            <p className="text-gray-300 mb-2">
              Follow us on social media and stay updated with our latest events, projects, and announcements.
            </p>

            <div className="flex justify-center space-x-6 mb-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6" />
              </motion.a>
            </div>

            <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
              <h4 className="text-lg font-bold text-cyan-400 mb-2">
                Why Join SCOPE?
              </h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Hands-on project experience</li>
                <li>• Networking with like-minded peers</li>
                <li>• Access to exclusive workshops</li>
                <li>• Career guidance and mentorship</li>
                <li>• Build your portfolio</li>
              </ul>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
