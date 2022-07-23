import { useTheme } from "../hooks/useTheme";
import "./ThemeSelector.css";
import modeIcon from "../assets/mode-icon.svg";

export default function ThemeSelector() {
  const { mode, changeMode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  //console.log(mode);

  return (
    <div className="theme-selector">
      {" "}
      <div className="mode-toggle">
        <img
          onClick={toggleMode}
          src={modeIcon}
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
          alt="dark/light toggle icon"
        />
      </div>
    </div>
  );
}
