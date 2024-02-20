import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import classnames from "classnames";
import { useTheme } from "./providers/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";
import "./assets/css/style.css";

function App() {
  const { isDarkTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className={classnames("app", { dark: isDarkTheme })}>
        <AppRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;
