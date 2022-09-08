import Sidebar from "../sidebar/Sidebar";
import PageRoutes from "../PageRoutes";
import "./layout.css";
import TopNav from "../topnav/TopNav";
import { useEffect } from "react";
import { useThemeContext } from "../../context/ThemeContext";

const Layout = () => {
  const { mode, setMode, color, setColor } = useThemeContext();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");
    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");
    setMode(themeClass);
    setColor(colorClass);
  }, [setColor, setMode]);

  return (
    <div className={`layout ${mode} ${color}`}>
      <Sidebar />
      <div className="layout__content">
        <TopNav />
        <div className="layout__content-main">
          <PageRoutes />
        </div>
      </div>
    </div>
  );
};

export default Layout;
