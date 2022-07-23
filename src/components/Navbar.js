import { Link } from "react-router-dom";
import "./Navbar.css";

import { useTheme } from "../hooks/useTheme";

function Navbar() {
  const { color, changeColor } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
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
