import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import ToggleSwitch from "./ToggleSwitch";
import { useTheme } from "../hooks/useTheme";

function Navbar() {
  const { theme } = useTheme(ThemeContext);

  return (
    <div className="navbar" style={{ background: theme }}>
      <nav>
        <Link to="/" className="brand">
          Cooking with Gordon
        </Link>
        <Link to="/create">Create</Link>
      </nav>
    </div>
  );
}

export default Navbar;
