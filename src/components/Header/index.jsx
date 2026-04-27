import './Header.css';
import { Navigation } from '../Navigation/index.jsx';
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Shane's Portfolio</h1>
        <Navigation></Navigation>
      </div>
    </header>
  );
}

export {Header};
