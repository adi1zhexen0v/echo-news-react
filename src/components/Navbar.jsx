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
        <div className="navbar-link">Главная</div>
        <div className="navbar-link">Новости</div>
        <div className="navbar-link">Контакты</div>
      </nav>
    </>
  );
}

export default Navbar;
