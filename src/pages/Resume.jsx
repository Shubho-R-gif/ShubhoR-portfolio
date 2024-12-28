import PropTypes from "prop-types"; // Import PropTypes
import profile from "../assets/profile2.jpg";
import "./Resume.css";
const Resume = ({ isDarkMode }) => {
  const details = [
    {
      img: profile, // Replace with the correct image path
      name: "Subho Halder",
      title: "Front-End Developer - UI/UX Designer", // Add your title here
      location: "Delhi, India", // Update your location
      email: "subhor.workwith@gmail.com", // Replace with your email
      linkedin: "https://www.linkedin.com/in/subho-halder-5b9aa127b/", // Update with your LinkedIn URL
      github: "https://github.com/Shubho-R-gif", // Replace with your GitHub URL
    },
  ];
  const summary = [
    {
      text: "Motivated and detail-oriented Frontend Developer with 1 year of professional experience in building responsive and dynamic web applications using React.js. Strong knowledge of modern JavaScript, front-end libraries, and UI/UX principles. Passionate about crafting user-friendly interfaces and improving web performance.",
    },
  ];
  const skills = [
    {
      skill: ["Programming Languages: ", "JavaScript (ES6+)"],
    },
    {
      skill: ["Frontend&Technologies: ", "React.js,", " Redux"],
    },
    {
      skill: ["WebDesign:", " HTML5,", " CSS3,", " Bootstrap"],
    },
    {
      skill: ["ToolsAndPlatforms:", " Git-Hub,", " Vite"],
    },
    {
      skill: ["Others:", " Photoshop"],
    },
  ];
  const education = [
    {
      degree: "Bachelor's in Arts:",
      institution: "Zakir hussain college",
      year: "2021 - 2024",
    },
  ];
  const languages = [
    {
      language: "English",
      proficiency: "Fluent",
    },
    {
      language: "Hindi",
      proficiency: "Fluent",
    },
    {
      language: "Bengali",
      proficiency: "Fluent",
    },
  ];

  return (
    <div className="resume">
      {/* Background Element */}
      <div className="resume-bg"></div>
      <div className="resume-bg1"></div>
      {/* Profile Section */}
      {details.map((detail, index) => (
        <figure key={index}>
          <img src={detail.img} alt="profileimg" />
          <figcaption>
            <h1>{detail.name}</h1>
            <h3>{detail.title}</h3>
            {/* Location with icon */}
            <p>
              <i className="fas fa-map-marker-alt"></i>{" "}
              {/* Font Awesome location icon */}
              {detail.location}
            </p>
          </figcaption>
          <figcaption className="links-section">
            {/* Email with icon */}
            <p>
              <i className="fas fa-envelope"></i>{" "}
              {/* Font Awesome email icon */}
              <a href={`mailto:${detail.email}`}>{"ShubhoR.com"}</a>{" "}
              {/* Display custom email name */}
            </p>

            {/* LinkedIn */}
            <p>
              <i className="fab fa-linkedin"></i>{" "}
              {/* Font Awesome LinkedIn icon */}
              <a
                href={detail.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Linkedin"}
              </a>
            </p>

            {/* GitHub */}
            <p>
              <i className="fab fa-github"></i> {/* Font Awesome GitHub icon */}
              <a href={detail.github} target="_blank" rel="noopener noreferrer">
                {"Github"}
              </a>
            </p>
          </figcaption>
        </figure>
      ))}

      {/* Summary Section */}
      <section className="summary">
        <h2
          style={{
            color: isDarkMode ? "rgb(255, 249, 249)" : " rgba(0, 0, 0, 0.94)",
          }}
        >
          Summary:
        </h2>
        {summary.map((summ, index) => (
          <p
            style={{
              color: isDarkMode ? "rgb(180, 161, 255)" : "rgb(67, 8, 143)",
            }}
            key={index}
          >
            {summ.text}
          </p>
        ))}
      </section>

      {/* Skills Section */}
      <section className="skills">
        <ul>
          <h2
            style={{
              color: isDarkMode ? "rgb(255, 249, 249)" : " rgba(0, 0, 0, 0.94)",
            }}
          >
            Skills & Expertise:
          </h2>
          {skills.map((skill, index) => (
            <li
              style={{
                color: isDarkMode ? "rgb(180, 161, 255)" : "rgb(67, 8, 143)",
              }}
              key={index}
            >
              {skill.skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Education Section */}
      <section className="education">
        {education.map((edu, index) => (
          <div key={index}>
            <h4
              style={{
                color: isDarkMode
                  ? "rgb(255, 249, 249)"
                  : " rgba(0, 0, 0, 0.94)",
              }}
            >
              {edu.degree}
            </h4>
            <p
              style={{
                color: isDarkMode ? "rgb(180, 161, 255)" : "rgb(67, 8, 143)",
              }}
            >
              {edu.institution} ({edu.year})
            </p>
          </div>
        ))}
      </section>

      {/* Languages Section */}
      <section className="languages">
        <h1
          style={{
            color: isDarkMode ? "rgb(255, 249, 249)" : " rgba(0, 0, 0, 0.94)",
          }}
        >
          Languages:
        </h1>
        {languages.map((lang, index) => (
          <p
            style={{
              color: isDarkMode ? "rgb(180, 161, 255)" : "rgb(67, 8, 143)",
            }}
            key={index}
          >
            {lang.language}: {lang.proficiency}
          </p>
        ))}
      </section>
    </div>
  );
};
// PropTypes validation
Resume.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
export default Resume;
