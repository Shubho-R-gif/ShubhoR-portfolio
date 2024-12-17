import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons"; // House icon
import { faMoon, faStar, faSun } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types"; // Import PropTypes
import "./Navbar.css";

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header
      style={{
        backgroundColor: isDarkMode ? " rgba(18, 17, 19, 0.782)" : "white",
      }}
    >
      <nav>
        <img src={profile} alt="My-profile" loading="eager" />
        <span
          style={{
            color: isDarkMode
              ? "rgb(253, 250, 250)"
              : " rgba(119, 32, 148, 0.936)",
          }}
        >
          Shubho R
        </span>
        {/* Dark mode toggle button */}
        <div className="darkmode-btn" onClick={toggleDarkMode}>
          {/* Sun icon for dark mode */}
          {isDarkMode && (
            <FontAwesomeIcon icon={faSun} size="2x" className="sun" />
          )}

          {/* Moon and stars for light mode */}
          {!isDarkMode && (
            <>
              <FontAwesomeIcon icon={faMoon} size="2x" className="moon" />
              <FontAwesomeIcon
                icon={faStar}
                size="xs"
                className="star top-left"
              />
              <FontAwesomeIcon
                icon={faStar}
                size="sm"
                className="star top-right"
              />
            </>
          )}
        </div>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} />
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                color: isDarkMode
                  ? "rgb(253, 250, 250)"
                  : " rgba(119, 32, 148, 0.936)",
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              style={{
                color: isDarkMode
                  ? "rgb(253, 250, 250)"
                  : " rgba(119, 32, 148, 0.936)",
              }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{
                color: isDarkMode
                  ? "rgb(253, 250, 250)"
                  : " rgba(119, 32, 148, 0.936)",
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
// PropTypes validation
Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Navbar;
