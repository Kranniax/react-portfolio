import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header/index.jsx";
import { About } from "./components/About/index.jsx";
import { Portfolio } from "./components/Portfolio/index.jsx";
import { Contact } from "./components/Contact/index.jsx";
import { Footer } from "./components/Footer/index.jsx";

function App() {
  const [titles] = useState(["About", "Portfolio", "Contact", "Resume"]);
  // const [title, setTitle] = useState(titles[0]);

  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
