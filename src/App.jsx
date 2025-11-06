import Hero from "./sections/Hero";
import Features from "./sections/Features";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Education from "./sections/Education";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl overflow-x-hidden">
      <Hero />
      <Features />
      <About />
      <Projects />
      <Experiences />
      <Education />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default App;
