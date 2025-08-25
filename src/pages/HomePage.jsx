// src/pages/HomePage.jsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const HomePage = ({ navigate }) => (
  <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
    <div className="text-center z-10 px-6">
      <div className="mb-8">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
          John Doe
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Full Stack Developer & UI/UX Designer
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Crafting beautiful, functional web experiences with modern technologies and creative design
        </p>
      </div>

      {/* Socials */}
      <div className="flex justify-center space-x-6 mb-12">
        <a href="https://github.com" className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com" className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="mailto:sentfrommy3ds@icloud.com" className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition">
          <Mail className="w-6 h-6" />
        </a>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => navigate("/projects")}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold text-white hover:from-purple-700 hover:to-cyan-700 hover:scale-105 shadow-lg transition"
        >
          View My Work
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold text-purple-400 hover:bg-purple-500 hover:text-white hover:scale-105 transition"
        >
          Get In Touch
        </button>
      </div>
    </div>
  </div>
);

export default HomePage;
