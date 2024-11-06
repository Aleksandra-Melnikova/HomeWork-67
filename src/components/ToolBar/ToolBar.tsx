import { NavLink } from "react-router-dom";
import "./Toolbar.css";

const ToolBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <NavLink to="/">
            <span className="navbar-brand mb-0 text-white fs-1">
              DoorKeypad
            </span>
          </NavLink>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link fs-3 me-5" to="/calculator">
                Calculator
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default ToolBar;
