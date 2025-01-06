
{/*}
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/home'); // Track active link
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      {/* Hamburger Menu (Visible Only on Mobile) 
      <div
        className={`${styles.navToggler} ${isSidebarOpen ? styles.open : ''}`}
        onClick={toggleSidebar}
      >
        <span></span>
      </div>

      {/* Sidebar/Navbar 
      <header className={`${styles.aside} ${isSidebarOpen ? styles.open : ''}`}>
        <div className={styles.logo}>
          <a href="#">
            <span>N</span>extfolio
          </a>
        </div>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link
                to="/"
                className={activeLink === '/' ? styles.active : ''}
                onClick={() => handleLinkClick('/')}
              >
                <i className="fa fa-home"></i> Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className={activeLink === '/dashboard' ? styles.active : ''}
                onClick={() => handleLinkClick('/dashboard')}
              >
                <i className="fa fa-chart-bar"></i> Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/create"
                className={activeLink === '/create' ? styles.active : ''}
                onClick={() => handleLinkClick('/create')}
              >
                 <i className="fa fa-briefcase"></i> Create- Portfolio
              </Link>
            </li>

            <li>
              <Link
                to="/custom"
                className={activeLink === '/custom' ? styles.active : ''}
                onClick={() => handleLinkClick('/custom')}
              >
               <i className="fa fa-plus-square"></i>
               Custom Template
              </Link>
            </li>

            
            <li>
              <Link
                to="/login"
                className={activeLink === '/login' ? styles.active : ''}
                onClick={() => handleLinkClick('/login')}
              >
                <i className="fa fa-sign-in-alt"></i> Login
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={activeLink === '/contact' ? styles.active : ''}
                onClick={() => handleLinkClick('/contact')}
              >
                <i className="fa fa-user-plus"></i> Contact Us
              </Link>
            </li>

            

          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar; 
*/}



import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isSidebarOpen) {
      toggleSidebar(); // Close the sidebar after clicking a link
    }
  };

  return (
    <>
      <div
        className={`${styles.navToggler} ${isSidebarOpen ? styles.open : ""}`}
        onClick={toggleSidebar}
      >
        <span></span>
      </div>

      <header className={`${styles.aside} ${isSidebarOpen ? styles.open : ""}`}>
        <div className={styles.logo}>
          <Link to="/" onClick={() => handleLinkClick("/")}>
            <span>N</span>extfolio
          </Link>
        </div>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link
                to="/"
                className={activeLink === "/" ? styles.active : ""}
                onClick={() => handleLinkClick("/")}
              >
                <i className="fa fa-home"></i> Home
              </Link>
            </li>

            {isAuthenticated ? (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    className={activeLink === "/dashboard" ? styles.active : ""}
                    onClick={() => handleLinkClick("/dashboard")}
                  >
                    <i className="fa fa-handshake"></i> Cover Letter
                  </Link>
                </li>
                <li>
                  <Link
                    to="/create"
                    className={activeLink === "/create" ? styles.active : ""}
                    onClick={() => handleLinkClick("/create")}
                  >
                    <i className="fa fa-briefcase"></i> Create-Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/custom"
                    className={activeLink === "/custom" ? styles.active : ""}
                    onClick={() => handleLinkClick("/custom")}
                  >
                    <i className="fa fa-plus-square"></i> Custom Template
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className={`${styles.logout} ${
                      activeLink === "/logout" ? styles.active : ""
                    }`}
                  >
                    <i className="fa fa-sign-out-alt"></i> Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className={activeLink === "/login" ? styles.active : ""}
                  onClick={() => handleLinkClick("/login")}
                >
                  <i className="fa fa-sign-in-alt"></i> Login
                </Link>
              </li>
            )}

            <li>
              <Link
                to="/contact"
                className={activeLink === "/contact" ? styles.active : ""}
                onClick={() => handleLinkClick("/contact")}
              >
                <i className="fa fa-user-plus"></i> Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
