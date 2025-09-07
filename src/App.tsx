import React from "react";
import DivisionsSection from "./components/DivisionsSection";
import EventsSection from "./components/EventsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import HeroSection from "./components/Hero";

import './App.css'
import FAQ from "./components/FAQ";
// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <AnimatedBackground theme="dataflow" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DivisionsSection />
      <EventsSection />
      <ProjectsSection />
      <ContactSection />
      <FAQ/>
      <Footer />
    </div>
  );
}