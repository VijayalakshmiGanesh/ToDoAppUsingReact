import { NavLink } from "react-router-dom";

function Header() {
  const activeLink = ({ isActive }) => ({
    color: isActive ? " #ec2322" : "#f16b64",
    textDecoration: isActive ? "underline" : "none",
    padding: 10
  });
  return (
    <nav style={{ fontSize: 19 }}>
      <NavLink style={activeLink} to="/">
        Home
      </NavLink>{" "}
      ||
      <NavLink style={activeLink} to="/done">
        Done
      </NavLink>{" "}
      ||
      <NavLink style={activeLink} to="/not-done">
        Not done
      </NavLink>{" "}
      ||
      <NavLink style={activeLink} to="/update-TodoItems">
        Update Todo list
      </NavLink>
    </nav>
  );
}

export default Header;
