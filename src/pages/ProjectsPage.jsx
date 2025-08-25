// src/pages/ProjectsPage.jsx
import React from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Collaborative project management with real-time updates.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tech: ["React", "Firebase", "Material-UI"],
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description: "Weather app with location forecasts and analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      tech: ["React", "OpenWeather API", "Chart.js"],
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media data.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tech: ["Vue.js", "D3.js", "Express"],
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      title: "Recipe Finder App",
      description: "Recipe app with ingredient search and meal planning.",
      image: "https://images.unsplash.com/photo-1556909114-4e77d0b7a0e1?w=400&h=250&fit=crop",
      tech: ["React Native", "Redux"],
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      live: "https://demo.com",
    },
  ];

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  const ProjectCard = ({ project, featured }) => (
    <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-purple-500/20 hover:scale-105 transition">
      <div className="relative overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        {featured && (
          <span className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-xs text-white rounded-full">
            Featured
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-purple-400">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => (
            <span key={i} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
              {t}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a href={project.github} className="flex items-center text-gray-300 hover:text-purple-400">
            <Github className="w-4 h-4 mr-2" /> Code
          </a>
          <a href={project.live} className="flex items-center text-gray-300 hover:text-cyan-400">
            <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-20 px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
            A collection of projects showcasing different technologies and problem-solving approaches.
          </p>
        </div>

        {/* Featured */}
        <h2 className="text-3xl font-bold mb-8 text-purple-400">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featured.map((p, i) => <ProjectCard key={i} project={p} featured />)}
        </div>

        {/* Others */}
        <h2 className="text-3xl font-bold mb-8 text-purple-400">Other Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
