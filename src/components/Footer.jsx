// src/components/Footer.jsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-6 bg-slate-900/50 border-t border-purple-500/20">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="text-gray-400 mb-4 md:mb-0">© 2024 John Doe. Built with React and lots of ☕</div>
      <div className="flex space-x-4">
        <a href="https://github.com" className="text-gray-400 hover:text-purple-400">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com" className="text-gray-400 hover:text-purple-400">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="mailto:john@example.com" className="text-gray-400 hover:text-purple-400">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
