import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        PortfolioHub
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-project">Add Project</Link>
      </nav>
    </header>
  );
}

export default Header;
