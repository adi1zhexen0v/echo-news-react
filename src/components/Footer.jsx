import { Link } from "react-router-dom";
import { useTheme } from "../providers/ThemeProvider";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  HOME_PAGE_ROUTE,
  NEWS_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from "../utils/consts";
import classnames from "classnames";

function Footer() {
  const { isDarkTheme } = useTheme();
  return (
    <footer className={classnames("footer", { dark: isDarkTheme })}>
      <div className="footer-top">
        <div className="footer-part">
          <h2 className="footer-logo">EchoNews</h2>
          <ul className="footer-link-list">
            <Link to={HOME_PAGE_ROUTE} className="footer-link-item">
              Главная
            </Link>
            <Link to={NEWS_PAGE_ROUTE} className="footer-link-item">
              Новости
            </Link>
            <Link to={SETTINGS_PAGE_ROUTE} className="footer-link-item">
              Настройки
            </Link>
          </ul>
        </div>
        <div className="footer-part">
          <div className="footer-social-list">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-item"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://ru-ru.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-item"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com/?lang=ru"
              target="_blank"
              rel="noreferrer"
              className="footer-social-item"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2024 &copy; Все права защищены</p>
      </div>
    </footer>
  );
}

export default Footer;
