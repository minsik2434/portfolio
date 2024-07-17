import { useRef } from "react";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";
import { useState } from "react";
import { useLayoutEffect } from "react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const welcomeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [changeHeader, setChangeHeader] = useState(0);
  const onWelcomeClick = () => {
    welcomeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onSkillsClick = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onProjectsClick = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useLayoutEffect(() => {
    setChangeHeader(welcomeRef.current.getBoundingClientRect().height);
  }, []);

  return (
    <div>
      <header className="flex justify-center">
        <Header
          onWelcomeClick={onWelcomeClick}
          onAboutClick={onAboutClick}
          onSkillsClick={onSkillsClick}
          onProjectsClick={onProjectsClick}
          onContactClick={onContactClick}
          height={changeHeader}
        />
      </header>
      <Welcome ref={welcomeRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
