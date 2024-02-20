import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import { useTheme } from "../providers/ThemeProvider";
import {
  HOME_PAGE_ROUTE,
  NEWS_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from "../utils/consts";

function Navbar() {
  const { isDarkTheme } = useTheme();
  return (
    <>
      <header className={classnames("header", { dark: isDarkTheme })}>
        <div className="header-container">
          <h1 className="header-logo">EchoNews</h1>
          <div className="header-btn">
            <FontAwesomeIcon icon={faSearch} />
          </div>
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
