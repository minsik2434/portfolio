import { useRef } from "react";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";

function App() {
  const welcomeRef = useRef(null);
  const aboutRef = useRef(null);
  const onWelcomeClick = () => {
    console.log(welcomeRef);
    welcomeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <header className="flex justify-center">
        <Header onWelcomeClick={onWelcomeClick} onAboutClick={onAboutClick} />
      </header>
      <Welcome ref={welcomeRef} />
      <About ref={aboutRef} />
      <Skills />
    </div>
  );
}

export default App;
