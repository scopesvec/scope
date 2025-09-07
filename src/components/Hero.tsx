import React from "react";
import { motion} from "motion/react";
import { Button } from "./ui/button";
import {
 ChevronDown,
} from "lucide-react";

const useScrollTo = () => {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return scrollTo;
};
const HeroSection = () => {
  const scrollTo = useScrollTo();

  return (
    <section
      id="/"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: [
                "0% 50%",
                "100% 50%",
                "0% 50%",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            SCOPE
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Student Community of Programming and Electronics
          </motion.p>
          <motion.p
            className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Where Code Meets Circuits
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => scrollTo("about")}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-green-400 hover:to-cyan-500 text-white px-8 py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            Explore SCOPE
          </Button>
          <Button
            onClick={() => scrollTo("contact")}
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            Join Us
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollTo("about")}
          >
            <ChevronDown className="w-8 h-8 text-cyan-400 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;