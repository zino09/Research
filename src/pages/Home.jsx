import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Home.css"; // Import CSS for styling

const Home = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Submit all your valuable research work here</h1>
          <p>Centralized storage for all student research submissions</p>
          <Link to="/try-now" className="btn\ hero-btn">
            Try Now
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Home;
