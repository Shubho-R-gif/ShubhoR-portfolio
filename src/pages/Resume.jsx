import profile from "../assets/profile2.jpg";
import "./Resume.css";
const Resume = () => {
  const details = [
    {
      img: profile, // Replace with the correct image path
      name: "Shubho Halder",
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
  const experience = [
    {
      company: "Company Name",
      role: "Your Role",
      period: "Jan 2020 - Dec 2023",
      description:
        "A brief description of your responsibilities and achievements in this role.",
    },
  ];
  const skills = [
    {
      skill: "JavaScript",
      level: "Advanced",
    },
    {
      skill: "React",
      level: "Intermediate",
    },
  ];
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "University Name",
      year: "2016 - 2020",
    },
  ];
  const languages = [
    {
      language: "English",
      proficiency: "Fluent",
    },
    {
      language: "Spanish",
      proficiency: "Intermediate",
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
        {summary.map((summ, index) => (
          <p key={index}>{summ.text}</p>
        ))}
      </section>

      {/* Experience Section */}
           <section className="experience">
        {experience.map((exp, index) => (
          <div key={index}>
            <h4>
              {exp.role} - {exp.company}
            </h4>
            <p>{exp.period}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      {/* Skills Section */}
      <section className="skills">
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              {skill.skill} ({skill.level})
            </li>
          ))}
        </ul>
      </section>

      {/* Education Section */}
         <section className="education">
        {education.map((edu, index) => (
          <div key={index}>
            <h4>{edu.degree}</h4>
            <p>
              {edu.institution} ({edu.year})
            </p>
          </div>
        ))}
      </section>

      {/* Languages Section */}
         <section className="languages">
        {languages.map((lang, index) => (
          <p key={index}>
            {lang.language}: {lang.proficiency}
          </p>
        ))}
      </section>
    </div>
  );
};

export default Resume;
