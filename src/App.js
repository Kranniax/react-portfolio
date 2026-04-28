import "./App.css";
import { Header } from "./components/Header/index.jsx";
import { About } from "./components/About/index.jsx";
import { Portfolio } from "./components/Portfolio/index.jsx";
import { Contact } from "./components/Contact/index.jsx";
import { Footer } from "./components/Footer/index.jsx";

function App() {
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
