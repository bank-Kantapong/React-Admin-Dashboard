import { useEffect, useRef, useState } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import "./thememenu.css";

const modeSetting = [
  {
    id: "light",
    name: "Light",
    background: "light-background",
    class: "theme-mode-light",
  },
  {
    id: "dark",
    name: "Dark",
    background: "dark-background",
    class: "theme-mode-dark",
  },
];

const colorSettings = [
  {
    id: "blue",
    name: "Blue",
    background: "blue-color",
    class: "theme-color-blue",
  },
  {
    id: "red",
    name: "Red",
    background: "red-color",
    class: "theme-color-red",
  },
  {
    id: "cyan",
    name: "Cyan",
    background: "cyan-color",
    class: "theme-color-cyan",
  },
  {
    id: "green",
    name: "Green",
    background: "green-color",
    class: "theme-color-green",
  },
  {
    id: "orange",
    name: "Orange",
    background: "orange-color",
    class: "theme-color-orange",
  },
];

const clickOutSideRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("active");
    } else {
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
};

const ThemeMenu = () => {
  const [currentMode, setCurrentMode] = useState("light");
  const [currentColor, setCurrentColor] = useState("blue");
  const { setMode, setColor } = useThemeContext();
  const menuRef = useRef(null);
  const menuToggleRef = useRef(null);
  clickOutSideRef(menuRef, menuToggleRef);

  const onChangeActiveMenu = () => menuRef.current.classList.add("active");

  const closeMenu = () => menuRef.current.classList.remove("active");

  const onChangeMode = (mode) => {
    setCurrentMode(mode.id);
    localStorage.setItem("themeMode", mode.class);
    setMode(mode.class)
  };

  const onChangeColor = (color) => {
    setCurrentColor(color.id);
    localStorage.setItem("colorMode", color.class);
    setColor(color.class)
  };

  useEffect(() => {
    const themeClass = modeSetting.find(
      (e) => e.class === localStorage.getItem("themeMode", "theme-mode-light")
    );
    const colorClass = colorSettings.find(
      (e) => e.class === localStorage.getItem("colorMode", "theme-mode-light")
    );

    if (themeClass !== undefined) setCurrentMode(themeClass.id);
    if (colorClass !== undefined) setCurrentColor(colorClass.id);
  }, []);

  return (
    <div>
      <button
        ref={menuToggleRef}
        className="dropdown__toggle"
        onClick={() => onChangeActiveMenu()}
      >
        <i className="bx bx-palette" />
      </button>
      <div ref={menuRef} className="theme-menu">
        <h4>Theme settings</h4>
        <button className="theme-menu__close" onClick={() => closeMenu()}>
          <i className="bx bx-x" />
        </button>
        <div className="theme-menu__select">
          <span>Choose mode</span>
          <ul className="mode-list">
            {modeSetting.map((item, index) => (
              <li key={index} onClick={() => onChangeMode(item)}>
                <div
                  className={`mode-list__color ${item.background} ${
                    item.id === currentMode ? "active" : ""
                  }`}
                >
                  <i className="bx bx-check" />
                </div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="theme-menu__select">
          <span>Choose color</span>
          <ul className="mode-list">
            {colorSettings.map((item, index) => (
              <li key={index} onClick={() => onChangeColor(item)}>
                <div
                  className={`mode-list__color ${item.background} ${
                    item.id === currentColor ? "active" : ""
                  }`}
                >
                  <i className="bx bx-check" />
                </div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThemeMenu;
