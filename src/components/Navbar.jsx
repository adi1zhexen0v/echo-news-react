import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import { useTheme } from "../providers/ThemeProvider";
import {
  HOME_PAGE_ROUTE,
  NEWS_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  SEARCH_PAGE_ROUTE,
} from "../utils/consts";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkTheme } = useTheme();
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  function handleClickToggleSearch() {
    setSearchIsOpen(!searchIsOpen);
  }

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    navigate(SEARCH_PAGE_ROUTE + "?searchQuery=" + searchInput);
  }

  useEffect(() => {
    setSearchIsOpen(false);
    setSearchInput("");
  }, [location.pathname]);

  return (
    <>
      <header className={classnames("header", { dark: isDarkTheme })}>
        <div className="header-container">
          <h1 className="header-logo">EchoNews</h1>
          <div className="header-btn" onClick={handleClickToggleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          {searchIsOpen && (
            <form className="search-form" onSubmit={handleSubmitSearchForm}>
              <h4 className="search-title">Поиск новостей:</h4>
              <div className="search-form-container">
                <input
                  type="text"
                  placeholder="Поиск..."
                  className="search-input"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button type="submit" className="search-submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </form>
          )}
        </div>
      </header>
      <nav className="navbar sticky">
        <Link to={HOME_PAGE_ROUTE} className="navbar-link">
          Главная
        </Link>
        <Link to={NEWS_PAGE_ROUTE} className="navbar-link">
          Новости
        </Link>
        <Link to={SETTINGS_PAGE_ROUTE} className="navbar-link">
          Настройки
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
