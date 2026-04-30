import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header/index.jsx";
import { About } from "./components/About/index.jsx";
import { Portfolio } from "./components/Portfolio/index.jsx";
import { Contact } from "./components/Contact/index.jsx";
import { Footer } from "./components/Footer/index.jsx";

function App() {
  // const [titles] = useState(["About", "Portfolio", "Contact", "Resume"]);
  // const [title, setTitle] = useState(titles[0]);
  const [navItem, setNavItem] = useState(0);

  return (
    <div>
      <Header navItem={navItem} setNavItem={setNavItem}></Header>
      <main>
        {navItem === 0 && <About />}
        {navItem === 1 && <Portfolio />}
        {navItem === 2 && <Contact />}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
