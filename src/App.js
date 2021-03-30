import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import NavHeader from "./components/Nav/NavHeader";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavHeader />
      <Home />
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
