import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Illustration from "../assets/Images/Side.jpg"; // Importing local image
import GoogleIcon from "../assets/Images/google.png"; // Importing local Google Icon

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:5000/api/login", { email, password });
      alert(`Login successful! Welcome, ${data.name}`);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Error logging in. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f3f4f6",
    },
    leftPanel: {
      flex: 1,
      maxWidth: "400px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    rightPanel: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#e5e7f8",
      borderRadius: "10px",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      fontSize: "14px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      color: "#fff",
      backgroundColor: "#4f46e5",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      margin: "10px 0",
    },
    link: {
      fontSize: "14px",
      color: "#4f46e5",
      textDecoration: "none",
      marginTop: "10px",
    },
    googleButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      fontSize: "16px",
      color: "#4f46e5",
      border: "1px solid #4f46e5",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "15px",
      backgroundColor: "#fff",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
      margin: "10px 0",
    },
    subheading: {
      fontSize: "16px",
      marginBottom: "20px",
      color: "#6b7280",
    },
    illustrationText: {
      fontSize: "16px",
      color: "#4f46e5",
      padding: "20px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Left Panel: Login Form */}
      <div style={styles.leftPanel}>
        <h1 style={styles.heading}>Welcome Back!</h1>
        <p style={styles.subheading}>Please enter login details below</p>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Password
            </label>
            <a href="/forgot-password" style={styles.link}>
              Forgot password?
            </a>
          </div>
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
          <div style={{ textAlign: "center", margin: "10px 0", color: "#6b7280" }}>Or continue</div>
          <button type="button" style={styles.googleButton}>
            <img
              src={GoogleIcon}
              alt="Google Icon"
              style={{ width: "20px", marginRight: "10px" }}
            />
            Log in with Google
          </button>
        </form>
        <a href="/signup" style={styles.link}>
          Don’t have an account? Sign Up
        </a>
      </div>

      {/* Right Panel: Illustration */}
      <div style={styles.rightPanel}>
        <div>
          <img
            src={Illustration}
            alt="Illustration"
            style={{ width: "80%", marginBottom: "20px" }}
          />
          <p style={styles.illustrationText}>
            Manage your task in an easy and more efficient way with Tasky...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
