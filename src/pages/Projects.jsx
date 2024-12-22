import { useState, useEffect } from "react";
// Import images from the projects folder
import weatherAppImage from "/ProjectsImg/weather-app.jpeg";
import snakeGameImage from "/ProjectsImg/snake-game.jpeg";
import colorPaletteImage from "/ProjectsImg/color-palette-generator.png";
import photoEditorImage from "/ProjectsImg/photo-editor.jpeg";
import calculatorImage from "/ProjectsImg/Calculator.jpeg";
import imageSlider from "/ProjectsImg/image slider.jpeg";
import reactCalculator from "/ProjectsImg/image-calc.jpeg";
import todoList from "/ProjectsImg/To-doList.jpeg";
import "./Projects.css";

const Projects = () => {
  const buttons = ["All", "HTML,CSS", "JavaScript", "React"];
  const initialProjects = [
    {
      title: "Weather App",
      description:
        "A sleek and interactive application that provides real-time weather updates for any location. Users can view temperature, humidity, wind speed, and detailed forecasts with a visually appealing UI.",
      img: weatherAppImage,
      category: "HTML,CSS",
      link: "https://github.com/Shubho-R-gif/Weather-app.git",
      countdown: 60, // Initial countdown for this project
      timerStart: false, // Timer state for this project
    },
    {
      title: "Snake Game",
      description:
        "A classic arcade-style snake game.npm controlling the snake, eating the food, and growing longer while avoiding obstacles and yourself!",
      img: snakeGameImage,
      category: "JavaScript",
      link: "https://github.com/Shubho-R-gif/Snake-game.git",
      countdown: 60, // Initial countdown for this project
      timerStart: false, // Timer state for this project
    },
    {
      title: "Color Generator",
      description:
        "A powerful tool for designers to generate color palettes. Experiment with random palettes and save your favorites.",
      img: colorPaletteImage,
      category: "React",
      link: "https://github.com/Shubho-R-gif/Color-Palette-Generator.git",
      countdown: 60, // Initial countdown for this project
      timerStart: false, // Timer state for this project
    },
    {
      title: "Calculator",
      description:
        "Basic calculator application created using HTML, CSS, and JavaScript. It features an interactive interface for performing simple arithmetic operations, with a clear and organized layout designed to enhance user experience.",
      img: calculatorImage,
      category: "JavaScript",
      link: "https://github.com/Shubho-R-gif/Calculator.git",
      countdown: 60, // Initial countdown for this project
      timerStart: false, // Timer state for this project
    },
    {
      title: "Photo Editor",
      description:
        "A user-friendly photo editing app that allows you to adjust brightness, apply filters, and more. Perfect for quick edits and enhancing your images on the go.",
      img: photoEditorImage,
      category: "JavaScript",
      link: "https://example.com",
      countdown: 60, // Initial countdown for this project
      timerStart: false, // Timer state for this project
    },
    {
      title: "React Calculator",
      description:
        "A lightweight, user-friendly calculator built using React. This calculator includes basic arithmetic functions such as addition, subtraction, multiplication, and division. ",
      img: reactCalculator,
      category: "React",
      link: "https://github.com/Shubho-R-gif/React-calculator.git",
      countdown: 60, // Initial countdown for this project
      timerStart: false, // Timer state for this project
    },
    {
      title: "Image slider",
      description:
        "A carousel slide project involves creating a simple sliding mechanism to display content or images sequentially, moving horizontally.",
      img: imageSlider,
      category: "HTML,CSS",
      link: "https://github.com/Shubho-R-gif/-carousel-slide-.git",
      countdown: 60, // Initial countdown for this project
      timerStart: false, // Timer state for this project
    },
    {
      title: "To-Do List",
      description:
        "A simple and user-friendly To-Do List application built with react. This app allows users to efficiently manage tasks by adding, deleting, and storing items using localStorage for persistent data.",
      img: todoList,
      category: "React",
      link: "https://github.com/Shubho-R-gif/To-do-list-in-react.git",
      countdown: 60, // Initial countdown for this project
      timerStart: false, // Timer state for this project
    },
  ];
  const [activeButton, setActiveButton] = useState("All");
  const [projects, setProjects] = useState(initialProjects);
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
    }, 100); // Execute every second

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
  const handleButtonClick = (category) => {
    setActiveButton(category);

    setProjects(
      category === "All"
        ? initialProjects // Show all projects
        : initialProjects.filter((p) => p.category === category) // Filter by category
    );
  };

  return (
    <main className="Projects-main">
      <div className="Heading-container">
        {/* Background Element */}
        <div className="Projects-bg1"></div>
        <h1>Projects.</h1>
        <p className="Description">
          Discover a variety of projects showcasing my skills in HTML, CSS,
          JavaScript, and React. From responsive web designs to dynamic
          applications.
        </p>
      </div>
      <div className="Button-bar">
        {buttons.map((category) => (
          <button
            key={category}
            className={`Category-button ${
              activeButton === category ? "active" : ""
            }`}
            onClick={() => handleButtonClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <section className="Projects-container1">
        {/* Projects Grid */}
        <div className="Projects-grid1">
          {projects.map((project, index) => (
            <div key={index} className="Project-card1">
              {/* Project Image */}
              <img
                src={project.img}
                alt={project.title}
                className="Project-image1"
              />

              {/* Project Details */}
              <div className="Project-details1">
                <h2 className="Project-title1">{project.title}</h2>
                <p className="Project-description1">{project.description}</p>
                <button
                  className="Project-button1"
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

export default Projects;
