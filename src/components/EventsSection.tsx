import React from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";

const EventsSection = () => {
  const events = [
    {
      title: "AI/ML Workshop Series",
      date: "Dec 15, 2024",
      type: "Workshop",
      status: "upcoming",
      description: "Hands-on machine learning with Python and TensorFlow",
      link: "https://example.com/register/ai-ml-workshop",
    },
    {
      title: "IoT Hackathon 2024",
      date: "Nov 20-22, 2024",
      type: "Hackathon",
      status: "upcoming",
      description: "Build innovative IoT solutions in 48 hours",
      link: "link.com",
    },
    {
      title: "Web Development Bootcamp",
      date: "Jan 10, 2025",
      type: "Bootcamp",
      status: "past",
      description: "Full-stack development with React and Node.js",
      link: "https://example.com/register/web-dev-bootcamp",
    },
    {
      title: "Electronics Design Contest",
      date: "Oct 15, 2024",
      type: "Contest",
      status: "past",
      description: "Design and build innovative electronic circuits",
      link: "",
    },
  ];

  return (
    <section id="events" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Events & Workshops
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our exciting events and expand your knowledge through hands-on learning
          </p>
        </motion.div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title + index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              {/* Event Info */}
              <div
                className={`w-full md:w-1/4 text-center ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div
                  className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-2 ${
                    event.status === "upcoming"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                  }`}
                >
                  {event.status === "upcoming" ? "Upcoming" : "Past Event"}
                </div>
                <p className="text-cyan-400 font-semibold">{event.date}</p>
                <p className="text-gray-400 text-sm">{event.type}</p>
              </div>

              {/* Event Card */}
              <div
                className={`w-full md:w-3/4 ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                <Card className="bg-gray-900/50 border-cyan-500/30 p-6 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  {event.status === "upcoming" && event.link && (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-green-400 hover:to-cyan-500 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      Register Now
                    </a>
                  )}
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
