// src/components/Navigation.jsx
import React, { useState, useEffect } from "react";
import { Home, User, Briefcase, MessageCircle, Menu, X } from "lucide-react";

const Navigation = ({ currentPath, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { path: "/about", label: "About", icon: <User className="w-4 h-4" /> },
    { path: "/projects", label: "Projects", icon: <Briefcase className="w-4 h-4" /> },
    { path: "/contact", label: "Contact", icon: <MessageCircle className="w-4 h-4" /> },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => handleNavigation("/")} className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform">
          Portfolio
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`flex items-center space-x-2 transition-colors hover:text-purple-400 ${
                currentPath === item.path ? "text-purple-400" : "text-white"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 hover:bg-white/10 rounded-lg">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full right-6 mt-4 w-48 p-4 bg-slate-900/95 rounded-lg border border-purple-500/20 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors hover:bg-purple-600/20 ${
                  currentPath === item.path ? "text-purple-400 bg-purple-600/10" : "text-white"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
