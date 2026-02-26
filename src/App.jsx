import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
