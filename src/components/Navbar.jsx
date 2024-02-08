import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <h1 className="header-logo">EchoNews</h1>
          <div className="header-btn">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </header>
      <nav class="navbar sticky">
        <Link to="/" className="navbar-link">
          Главная
        </Link>
        <Link to="/news" className="navbar-link">
          Новости
        </Link>
        <Link to="/contact" className="navbar-link">
          Контакты
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
