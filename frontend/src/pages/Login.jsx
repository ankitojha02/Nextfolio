{/*
import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../store/auth";

const Login = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const signUpButton = container.querySelector("#signUp");
    const signInButton = container.querySelector("#signIn");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });

    // Cleanup event listeners on unmount
    return () => {
      signUpButton.removeEventListener("click", () => {
        container.classList.add("right-panel-active");
      });
      signInButton.removeEventListener("click", () => {
        container.classList.remove("right-panel-active");
      });
    };
  }, []);

  // State for user details
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const {storetokenInLS} = useAuth();

  // handleInput functionality
  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // handleSubmit functionality
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response);

      if (response.ok) {
        alert("Registration successful!");
        setUser({
          username: "",
          email: "",
          password: "",
        });
      } else {
        const errorData = await response.json();
        alert("Error: " + errorData.message);
      }
    } catch (error) {
      console.log("Registration error: ", error);
    }
  };

  // Login Functionality

  const handleLoginSubmit = async (e)=>{
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: "POSt",
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(user)
      })

        console.log(response);
        const res_data = await response.json();
              if(response.ok){
                
                alert("Login successfully");
                 storetokenInLS(res_data.token);

                //localStorage.setItem("token" , res_data.token);
              }
              else {
                alert("Invalid Credentials");
              }

    } catch (error) {
      console.log("Login : ", error);
    }
  }

  return (
    <div className="container" id="container" ref={containerRef}>
      <div className="form-container sign-up-container">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            onChange={handleInput}
            name="username"
            value={user.username}
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={handleInput}
            name="email"
            value={user.email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleInput}
            name="password"
            value={user.password}
            required
          />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleLoginSubmit}>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" name="email" onChange={handleInput} />
          <input type="password" placeholder="Password" name="password" onChange={handleInput} />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn">
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;*/}


import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Login = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { storetokenInLS } = useAuth();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const container = containerRef.current;
    const signUpButton = container.querySelector("#signUp");
    const signInButton = container.querySelector("#signIn");

    const handleSignUpClick = () => container.classList.add("right-panel-active");
    const handleSignInClick = () => container.classList.remove("right-panel-active");

    signUpButton.addEventListener("click", handleSignUpClick);
    signInButton.addEventListener("click", handleSignInClick);

    return () => {
      signUpButton.removeEventListener("click", handleSignUpClick);
      signInButton.removeEventListener("click", handleSignInClick);
    };
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("Registration successful!");
        setUser({ username: "", email: "", password: "" });
        containerRef.current.classList.remove("right-panel-active"); // Switch to login panel
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email, password: user.password }),
      });

      const resData = await response.json();

      if (response.ok) {
        alert("Login successful!");
        storetokenInLS(resData.token); // Store the token after successful login
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setErrorMessage(resData.message || "Invalid credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="container" id="container" ref={containerRef}>
      <div className="form-container sign-up-container">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            onChange={handleInput}
            name="username"
            value={user.username}
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={handleInput}
            name="email"
            value={user.email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleInput}
            name="password"
            value={user.password}
            required
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleLoginSubmit}>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInput}
            value={user.email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInput}
            value={user.password}
            required
          />
          <a href="/forgot-password">Forgot your password?</a>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn">
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" id="signUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
