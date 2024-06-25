import { useRef } from "react";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";
import { useEffect } from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";

function App() {
  const welcomeRef = useRef(null);
  const aboutRef = useRef(null);
  const [changeHeader, setChangeHeader] = useState(0);
  const onWelcomeClick = () => {
    console.log(welcomeRef);
    welcomeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useLayoutEffect(() => {
    setChangeHeader(welcomeRef.current.getBoundingClientRect().height);
  }, []);

  console.log(changeHeader);
  return (
    <div>
      <header className="flex justify-center">
        <Header
          onWelcomeClick={onWelcomeClick}
          onAboutClick={onAboutClick}
          height={changeHeader}
        />
      </header>
      <Welcome ref={welcomeRef} />
      <About ref={aboutRef} />
      <Skills />
    </div>
  );
}

export default App;
