import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <header className="flex justify-center">
        <Header />
      </header>
      <Welcome />
      <About />
    </div>
  );
}

export default App;
