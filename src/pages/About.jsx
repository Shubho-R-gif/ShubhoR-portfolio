import "./About.css";
import { useEffect } from "react";
import top1 from "../assets/top1.png";
import top2 from "../assets/top0.png";
import center from "../assets/center.png";
import bottom from "../assets/bottom.png";
const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      document.querySelectorAll(".banner img").forEach((img, index) => {
        const speed = index * 0.2; // Adjust the speed for each layer
        img.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main>
      <section className="parallax-effect">
        <div className="banner">
          <img src={top1} alt="Top section decoration 1" loading="eager" />
          <img src={top2} alt="Top section decoration 2" loading="eager" />
          <h1>My journey</h1>
          <img src={center} alt="Center section decoration" loading="eager" />
          <img src={bottom} alt="Bottom section decoration" loading="eager" />
        </div>
      </section>
      <aside className="journey-container">
        <h2 className="journey-title">Experince</h2>
        <p className="journey-paragraph">
          In December 2023, I set out on my web development journey—curious but
          uncertain if this path was right for me. I had no idea whether coding
          would become something I would genuinely enjoy or just a fleeting
          interest. At first, every line of code felt like a puzzle I couldn’t
          quite solve, and the process of learning seemed slow, often leaving me
          frustrated. But each small success, whether it was getting an HTML tag
          to render correctly or styling a button with CSS, gave me a glimpse
          into the possibilities that coding offers. I began to appreciate how
          individual building blocks—HTML, CSS, and JavaScript—work together to
          shape the digital world we interact with every day.
        </p>
        <p className="journey-paragraph">
          What initially felt like a struggle gradually transformed into a
          rewarding challenge. I immersed myself in hours of online tutorials,
          hopping between Google searches and YouTube videos, determined to
          build something meaningful, no matter how small. The process wasn’t
          always smooth—there were moments of confusion, long debugging
          sessions, and ideas that didn’t quite pan out the way I hoped. Yet,
          those struggles became learning experiences, and every completed
          project, no matter how basic, felt like a step forward. Soon, I found
          myself experimenting with personal projects—simple portfolios,
          interactive forms, and small web apps that brought me immense
          satisfaction.
        </p>
        <p className="journey-paragraph">
          Now, with a full year of hands-on experience, I’ve developed not only
          technical skills but also a deeper appreciation for the craft of web
          development. My experience working with tools like React has allowed
          me to build more dynamic and engaging user interfaces, where code
          meets creativity. I’ve learned to think critically about user
          experience and design, balancing aesthetics with functionality.
          However, I know that this is just the beginning. The world of web
          development is vast and ever-evolving, and there’s still so much to
          explore—new frameworks to master, better practices to adopt, and
          exciting challenges to overcome. I’m excited about what the future
          holds and eager to continue growing, one line of code at a time.
        </p>
      </aside>
    </main>
  );
};

export default About;
