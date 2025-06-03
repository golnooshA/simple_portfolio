import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultationPage from './pages/ConsultationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow pt-24">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <About />
                <Projects />
                <Contact />
              </div>
            }
          />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
