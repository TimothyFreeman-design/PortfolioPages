// src/App.jsx
import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Router, Route, useRouter } from "./components/Router";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  const { currentPath, navigate } = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white">
      <Navigation currentPath={currentPath} navigate={navigate} />

      <Router>
        <Route path="/">
          <HomePage navigate={navigate} />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/contact">
          <ContactPage navigate={navigate} />
        </Route>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
