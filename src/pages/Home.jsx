import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import player from "../assets/player.gif";
import enemy from "../assets/enemy.gif";
import PropTypes from "prop-types";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
import "./Home.css";
// Import images from the projects folder
import weatherAppImage from "/ProjectsImg/weather-app.jpeg";
import snakeGameImage from "/ProjectsImg/snake-game.jpeg";
import colorPaletteImage from "/ProjectsImg/color-palette-generator.png";
import photoEditorImage from "/ProjectsImg/photo-editor.jpeg";

//Import resume from assests folder
import resume from "../assets/resume.pdf";
const Home = ({ isDarkMode }) => {
  const [textIndex, setTextIndex] = useState(0); // Manage the title switching index
  const [isVisible, setIsVisible] = useState(false); // Track visibility for scroll animation
  const textRef = useRef(null); // Reference for scroll animation
  const titles = ["Web Developer", "Frontend Developer", "a tech Enthusiast"];
  const skills = [
    {
      id: 1,
      name: "HTML",
      icon: faHtml5,
      level: "Intermediate",
      description:
        "Proficient in HTML, the foundation of web development. I have experience with semantic HTML to create accessible and SEO-friendly pages. I can design complex forms, embed multimedia, and organize content with sections and articles for improved usability. I also focus on clean, maintainable code to ensure scalability.",
      color: "#e34c26",
    },
    {
      id: 2,
      name: "CSS",
      icon: faCss3,
      level: "Intermediate",
      description:
        "Expert in CSS with a strong focus on responsive design using Flexbox and Grid. I create modern, visually appealing layouts and ensure cross-browser compatibility. My experience includes using CSS animations, media queries, and theming to enhance user experience. Additionally, I use frameworks like Bootstrap for consistent styling.",
      color: "#2965f1",
    },
    {
      id: 3,
      name: "JavaScript",
      icon: faJs,
      level: "Intermediate",
      description:
        "Skilled in JavaScript, with expertise in building dynamic and interactive web applications. I am comfortable working with ES6+ features, including promises, async/await, and modules. I have hands-on experience with DOM manipulation, event handling, and working with APIs to create smooth, user-friendly experiences.",
      color: "#f7df1e",
    },
    {
      id: 4,
      name: "React",
      icon: faReact,
      level: "Basic",
      description:
       "Proficient in React basics, including core features like useState, useRef, and useEffect for state management and component behavior. Familiar with React Router for handling client-side routing and building single-page applications. Focused on creating functional components and eager to expand knowledge in advanced React concepts.",
      color: "#61dafb",
    },
  ];
  const initialProjects = [
    {
      title: "Weather App",
      description:
        "A sleek and interactive application that provides real-time weather updates for any location. Users can view temperature, humidity, wind speed, and detailed forecasts with a visually appealing UI.",
      img: weatherAppImage,
      link: "https://github.com/Shubho-R-gif/Weather-app.git",
      countdown: 60, // Initial countdown for this project
      timerStart: false, // Timer state for this project
    },
    {
      title: "Snake Game",
      description:
        "A classic arcade-style snake game. Test your reflexes by controlling the snake, eating the food, and growing longer while avoiding obstacles and yourself!",
      img: snakeGameImage,
      link: "https://github.com/Shubho-R-gif/Snake-game.git",
      countdown: 60, // Initial countdown for this project
      timerStart: false, // Timer state for this project
    },
    {
      title: "Color Palette Generator",
      description:
        "A powerful tool for designers to generate color palettes. Experiment with random palettes, save your favorites, and ensure your designs have the perfect aesthetic.",
      img: colorPaletteImage,
      link: "https://github.com/Shubho-R-gif/Color-Palette-Generator.git",
      countdown: 60, // Initial countdown for this project
      timerStart: false, // Timer state for this project
    },
    {
      title: "Photo Editor",
      description:
        "A user-friendly photo editing app that allows you to adjust brightness, apply filters, and more. Perfect for quick edits and enhancing your images on the go.",
      img: photoEditorImage,
      link: "https://example.com",
      countdown: 60, // Initial countdown for this project
      timerStart: false, // Timer state for this project
    },
  ];
  const [projects, setProjects] = useState(initialProjects);
  // Loop through titles with animation
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [titles.length]);
  // Scroll animation using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);
  // Initialize AOS with desired settings
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 50, // Trigger animation when 50px into the viewport
      once: false, // Allow the animation to run multiple times
      mirror: true, // Animate when scrolling back up
    });
  }, []);

  //Countdown timer re-direct to the github
  useEffect(() => {
    // Set timeouts for each project with a timerStart and countdown > 0
    const timeoutId = setTimeout(() => {
      setProjects((prevProjects) => {
        return prevProjects.map((project) => {
          if (project.timerStart && project.countdown > 0) {
            return { ...project, countdown: project.countdown - 1 }; // Decrease countdown by 1
          } else if (project.countdown === 0 && project.timerStart) {
            /*  window.open(project.link, "_blank"); */
            window.location.href = project.link; // Open the link when countdown reaches 0
            return { ...project, timerStart: false, countdown: 60 }; // Reset timer and countdown
          }
          return project;
        });
      });
    }, 1000); // Execute every second

    // Clean up timeout on component unmount or when projects change
    return () => clearTimeout(timeoutId);
  }, [projects]); // Re-run when projects state changes

  // Handle button timerStart and countdown
  const handleTimerStart = (index) => {
    // Reset the timer to 60 seconds when clicked again
    setProjects((prevProjects) =>
      prevProjects.map(
        (project, i) =>
          i === index
            ? { ...project, timerStart: true, countdown: 60 }
            : project // Reset the countdown
      )
    );
  };
  //Handle resume click after re-direct resume page
  const handleResumeClick = () => {
    // Open the PDF in a new tab
    window.open(resume, "_blank");
  };
  return (
    <main className="Home-main">
      <figure>
        <img className="player" src={player} alt="player.Gif" loading="eager" />
        <img className="enemy" src={enemy} alt="enemy.Gif" loading="eager" />
      </figure>
      <article className="intro-container">
        <p className="intro-text">
          Hi, I&apos;m <span className="name">Subho Halder</span>
        </p>
        <h1
          className={`title ${isVisible ? "visible" : ""}`}
          ref={textRef}
          style={{ color: isDarkMode ? "white" : "black" }}
        >
          {titles[textIndex]}
        </h1>
        <p
          className={`description ${isVisible ? "visible" : ""}`}
          ref={textRef}
        >
          I build modern, responsive websites and web applications that connect
          people with technology effortlessly. With expertise in React and CSS,
          I enjoy transforming ideas into functional and aesthetic user
          interfaces.
        </p>
        <p className={`passion ${isVisible ? "visible" : ""}`} ref={textRef}>
          My passion lies in continuous learning, optimizing performance, and
          creating products that leave a lasting impact.
        </p>
        <h2 className={`cta ${isVisible ? "visible" : ""}`} ref={textRef}>
          <Link to="/contact">
            Let&apos;s connect and make something amazing together!
          </Link>
        </h2>
        <button
          type="button"
          className="resume-button"
          onClick={handleResumeClick}
        >
          Resume
        </button>
      </article>
      <hr />
      <section className="Skills-container ">
        {/* Animated Heading */}
        <h2 className="Skills-heading" data-aos="slide-up">
          My Skills - {titles[textIndex]} {/* Switch titles dynamically */}
        </h2>

        <ul data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
          {skills.map((skill) => (
            <li key={skill.id} className="Skills-item">
              <FontAwesomeIcon
                icon={skill.icon}
                className="Skill-icon"
                style={{ color: skill.color }} // Dynamic icon color
              />
              <div className="Skill-info">
                <h3 className="Skill-name">{skill.name}</h3>
                <p className="Skill-description">{skill.description}</p>
                <span className="Skill-level" style={{ color: skill.color }}>
                  Level: {skill.level}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="Projects-container">
        {/* Background Element */}
        <div className="Projects-bg"></div>

        <div className="Projects-bg-1">10</div>
        <div className="Projects-bg-2">02</div>

        {/* Heading Section */}
        <h4 className="Projects-heading">Explore My Works</h4>

        {/* Projects Grid */}
        <div className="Projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`Project-card ${index % 2 === 0 ? "" : "row-reverse"}`}
              data-aos="zoom-in"
              data-aos-anchor-placement="center-bottom"
            >
              {/* Project Image */}
              <img
                src={project.img}
                alt={project.title}
                className="Project-image"
              />

              {/* Project Details */}
              <div className="Project-details">
                <h2 className="Project-title">{project.title}</h2>
                <p className="Project-description">{project.description}</p>
                <button
                  className="Project-button"
                  onClick={() => handleTimerStart(index)}
                >
                  {project.timerStart
                    ? `Redirecting in ${project.countdown}s...`
                    : "Source code"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
// Prop validation
Home.propTypes = {
  isDarkMode: PropTypes.bool.isRequired, // Ensures 'isDarkMode' is a required boolean
};

export default Home;
