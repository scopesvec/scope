import React, { useState } from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is SCOPE?",
    answer: "SCOPE is a student organization that provides hands-on projects, workshops, and mentorship to help students grow their technical skills.",
  },
  {
    question: "What is the fullform of SCOPE?",
    answer: "Student Community of Programming and Electronics.",
  },
  {
    question: "How can I join the events?",
    answer: "You can register for upcoming events through the 'Register Now' links in the Events section of our website.",
  },
  {
    question: "Are the workshops free?",
    answer: "Most workshops are free for students, but some special workshops may require a registration fee.",
  },
  {
    question: "Can I access past event recordings?",
    answer: "Yes, recordings of past events are shared with registered participants and available in our resources section.",
  },
  {
    question: "How can I become a member of SCOPE?",
    answer: "You can apply to become a member through our membership form available on the website.",
  },
  
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-gray-900 relative">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Find answers to common questions about SCOPE, events, and membership.
        </motion.p>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto"> {/* changed from space-y-4 to space-y-6 */}
  {faqData.map((item, index) => (
    <Card
      key={index}
      className="bg-gray-800/50 border border-cyan-500/20 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-cyan-400/50"
      onClick={() => toggleFAQ(index)}
    >
      <div className="flex justify-between items-center p-4">
        <h3 className="text-lg md:text-xl font-semibold text-white">
          {item.question}
        </h3>
        <motion.div
          animate={{ rotate: activeIndex === index ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </motion.div>
      </div>
      {activeIndex === index && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="px-4 pb-4 text-gray-300"
        >
          {item.answer}
        </motion.div>
      )}
    </Card>
  ))}
</div>

    </section>
  );
};

export default FAQ;
