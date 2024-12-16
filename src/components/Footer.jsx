import "./Footer.css"; // Import CSS for styling
import profile from "../assets/profile.jpg"; // Ensure the correct relative path
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="Footer-section">
      <div className="footer-content">
        <div className="footer-heading">
          <img src={profile} alt="img-logo" />
          <h2>Shubho R</h2>
        </div>

        <div className="footer-description">
          <p>
            A showcase of my projects, skills, and journey as a web
            developer/designer.
          </p>
        </div>

        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/subho-halder-5b9aa127b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Shubho-R-gif"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Shubho R. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
