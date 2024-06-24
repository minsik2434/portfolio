import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <header className="flex justify-center">
        <Header />
      </header>
      <Welcome />
      <About />
      <Skills />
    </div>
  );
}

export default App;
