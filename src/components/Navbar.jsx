import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Research Data Portal</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
