import "./Contact.css";
import PropTypes from "prop-types"; // Import PropTypes
const Contact = ({ isDarkMode }) => {
  return (
    <div className="contact-container">
      <h2
        className="contact-container__title"
        style={{
          color: isDarkMode
            ? "rgb(253, 250, 250)"
            : " rgba(0, 0, 0, 0.94)",
        }}
      >
        Contact me
      </h2>
      <div className="contact-cards">
        <div className="contact-card">
          <i
            className="fas fa-map-marker-alt"
            style={{ color: "orangered" }}
          ></i>
          <p>
            <strong>Address:</strong>
            <br />
            <a
              href="https://maps.app.goo.gl/VC2TJZZBEDRuyQUk6"
              target="_blank"
              rel="noopener noreferrer"
            >
              H.no-142, Shahpur Jat, Siri Fort, New Delhi, Delhi 110049
            </a>
          </p>
        </div>

        <div className="contact-card">
          <i className="fas fa-phone-alt" style={{ color: "lightblue" }}></i>
          <p>
            <strong>Talk:</strong>
            <br />
            +91 7428870481
          </p>
        </div>

        <div className="contact-card">
          <i className="fas fa-envelope" style={{ color: "orange" }}></i>
          <p>
            <strong>Email:</strong>
            <br />
            <a
              href="mailto:subhor.workwith@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              subhor.workwith@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-card">
          <i className="fas fa-share-alt" style={{ color: "green" }}></i>
          <p>
            <strong>Social:</strong>
            <br />
            <a
              href="https://www.linkedin.com/in/subho-halder-5b9aa127b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="contact-card__social-link"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <br />
            <a
              href="https://github.com/Shubho-R-gif"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="contact-card__social-link"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
// PropTypes validation
Contact.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
export default Contact;
