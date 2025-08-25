// src/pages/AboutPage.jsx
import React from "react";
import { Code, Globe, Server, Palette, Database, User } from "lucide-react";

const AboutPage = () => {
  const skills = [
    { name: "JavaScript", icon: <Code className="w-6 h-6" />, level: 90 },
    { name: "React", icon: <Globe className="w-6 h-6" />, level: 85 },
    { name: "Node.js", icon: <Server className="w-6 h-6" />, level: 80 },
    { name: "UI/UX Design", icon: <Palette className="w-6 h-6" />, level: 75 },
    { name: "Database", icon: <Database className="w-6 h-6" />, level: 70 },
    { name: "Python", icon: <Code className="w-6 h-6" />, level: 65 },
  ];

  return (
    <div className="py-20 px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Bio */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-1 rounded-2xl w-fit mx-auto md:mx-0">
            <div className="bg-slate-800 p-8 rounded-2xl">
              <User className="w-32 h-32 text-purple-400" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-400">Hi, I'm John!</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience creating digital solutions that make a difference.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My journey started in college, and since then, I've worked with startups and enterprises on amazing digital experiences.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, I explore new tech, contribute to open-source, or share knowledge with the community.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:scale-105 transition">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-600/20 rounded-lg mr-4">{skill.icon}</div>
                  <span className="text-xl font-semibold">{skill.name}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-400 to-cyan-400 h-3 rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
                <div className="text-right mt-2 text-sm text-gray-400">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="bg-slate-800/30 rounded-2xl p-8 border border-purple-500/20">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">Senior Full Stack Developer</h3>
              <p className="text-purple-400 mb-2">Tech Solutions Inc. • 2022 - Present</p>
              <p className="text-gray-300">Leading development of scalable apps and mentoring junior developers.</p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">Frontend Developer</h3>
              <p className="text-cyan-400 mb-2">Creative Agency • 2020 - 2022</p>
              <p className="text-gray-300">Built responsive sites focusing on UX and performance.</p>
            </div>
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">Junior Web Developer</h3>
              <p className="text-pink-400 mb-2">StartupXYZ • 2019 - 2020</p>
              <p className="text-gray-300">Maintained website and collaborated on UI/UX improvements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
