import "./App.css";
import { Header } from "./components/Header/index.jsx";

import { Portfolio } from "./components/Portfolio/index.jsx";
import { Footer } from "./components/Footer/index.jsx";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
