import classnames from "classnames";
import { useTheme } from "../providers/ThemeProvider";

function SettingsPage() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div className="container">
      <h2 className="app-title">Настройки</h2>
      <div className="theme">
        <p className="theme-text">Светлая тема</p>
        <div
          className={classnames("toggle", { toggle__active: isDarkTheme })}
          onClick={toggleTheme}
        >
          <span className="toggle-round"></span>
        </div>
        <p className="theme-text">Темная тема</p>
      </div>
    </div>
  );
}

export default SettingsPage;
