import { Link } from "react-router-dom";
import "./Navbar.css"; // Optional: Add custom CSS for styling the buttons

const Navbar = () => {
  return (
    <nav>
      <h1>DISCOVER HUB</h1>
      <ul>
        <li>
          <Link to="/" className="btn-navbar">
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="btn-navbar">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/upload" className="btn-navbar">
            Upload
          </Link>
        </li>
        <li>
          <Link to="/groups" className="btn-navbar">
            Groups
          </Link>
        </li>
        <li>
          <Link to="/create-group" className="btn-navbar">
            Create Group
          </Link>
        </li>
        <li>
          <Link to="/login" className="btn-navbar">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;