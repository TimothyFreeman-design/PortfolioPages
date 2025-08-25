import React, { useState } from "react";
import { Mail, Linkedin, Github, Briefcase } from "lucide-react";

const ContactPage = ({ navigate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="py-20 px-6 mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
            I'm always open to new opportunities, interesting projects, or just a
            chat about technology.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-purple-500/20 hover:scale-105 transition">
            <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-300">john@example.com</p>
            <a
              href="mailto:john@example.com"
              className="inline-block mt-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Send Email
            </a>
          </div>

          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-purple-500/20 hover:scale-105 transition">
            <Linkedin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-300">linkedin.com/in/johndoe</p>
            <a
              href="https://linkedin.com"
              className="inline-block mt-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Connect
            </a>
          </div>

          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-purple-500/20 hover:scale-105 transition">
            <Github className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">GitHub</h3>
            <p className="text-gray-300">github.com/johndoe</p>
            <a
              href="https://github.com"
              className="inline-block mt-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Follow
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
          <h2 className="text-2xl font-bold mb-6 text-purple-400">
            Send Me a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-400 transition-all"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-400 transition-all resize-none"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-white hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Or if you prefer, you can also reach out to me directly:
          </p>
          <button
            onClick={() => navigate("/projects")}
            className="inline-flex items-center px-6 py-3 border border-purple-500 rounded-full font-medium text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Check Out My Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
