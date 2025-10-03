import { useEffect, useState, useRef } from "react";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Highlight />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

function Nav() {
  const handleLinkClick = () => {
    const checkbox = document.getElementById("navi-toggle");
    if (checkbox) checkbox.checked = false;
  };
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label for="navi-toggle" className="navigation__button">
        <span className="navigation__icon"></span>
      </label>
      <div className="navigation__background"></div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a
              href="#highlight"
              className="navigation__link"
              onClick={handleLinkClick}
            >
              Highlights
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#about-id"
              className="navigation__link"
              onClick={handleLinkClick}
            >
              About
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#skills-id"
              className="navigation__link"
              onClick={handleLinkClick}
            >
              Skills
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#projects"
              className="navigation__link"
              onClick={handleLinkClick}
            >
              Projects
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#contact"
              className="navigation__link"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Header() {
  return (
    <section className="header">
      <div className="header-text">
        <div className="heading-part-1">Hi,</div>
        <div className="heading-part-2">I am Salman</div>
        <div className="heading-part-3">Front-end Developer</div>
        <p className="header-tagline">Crafting engaging digital experiences</p>
        <div className="header-btns">
          <a href="#projects">
            <button className="header-btn header-btn--green">
              View My Work
            </button>
          </a>
          <a href="/resume.pdf" download>
            <button className="header-btn header-btn--grey">
              Download Resume
            </button>
          </a>
        </div>
      </div>

      <div className="header-image">
        <img src="/salman.webP" alt="salman-pic" className="my-image" />
      </div>
    </section>
  );
}

function Highlight() {
  return (
    <section className="highlight-section" id="highlight">
      <h3>Highlights</h3>
      <div className="highlight-box">
        <div className="highlight-item">💡 6+ Projects Completed</div>
        <div className="highlight-item">⚛️ React, JavaScript, Sass</div>
        <div className="highlight-item">📈 Focused on performance & UI/UX</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about-id">
      <h3>About</h3>
      <div className="about-box">
        <div className="image-box">
          <img src="/salman.webP" alt="salman-pic" className="my-image" />
        </div>

        <div className="about-text">
          <div>
            Hello! I'm <strong>Salman Khan</strong>, a
            <strong> front-end developer</strong> who specializes in building
            responsive, user-friendly web applications with React and modern
            JavaScript. I enjoy transforming complex design challenges into
            clean, maintainable code that delivers great user experiences.
          </div>
          <div>
            I'm currently deepening my expertise with Next.js to build faster,
            more SEO-friendly applications while continuing to expand my skills
            in the React ecosystem.
          </div>
          <div>
            I'm seeking a front-end developer role where I can contribute to
            meaningful products, collaborate with a passionate team, and
            continue growing as a developer. Let's build something amazing
            together!
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef();

  const skills = [
    { name: "HTML5", level: 90, logo: "/html-5.png" },
    { name: "CSS3", level: 70, logo: "/css-3.png" },
    { name: "JavaScript", level: 70, logo: "/js.png" },
    { name: "React", level: 50, logo: "/react.png" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getBarColor = (level) => {
    if (level >= 80) return "#4CAF50";
    if (level >= 50) return "#FFC107";
    return "#F44336";
  };

  return (
    <section className="skills" ref={sectionRef} id="skills-id">
      <h3 className="skills-heading-primary">Skills</h3>
      <div className="skill-box">
        <div className="skill-text">
          <h4 className="skills-heading-secondary">Professional skills</h4>

          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="skill">
                <div className="name-logo">
                  <img src={skill.logo} alt={skill.name} className="logo" />
                  <p style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                    {skill.name}
                  </p>
                </div>
                <p style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                  {skill.level}%
                </p>
              </div>

              <div className="progress-bar-wrapper">
                <div
                  className={`progress-bar-fill ${inView ? "fill" : ""}`}
                  style={{
                    "--scale": `${skill.level / 100}`,
                    "--color": getBarColor(skill.level),
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skill-image">
          <img src="/laptop.webP" alt="person-working" className="skill-img" />
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projectData = [
    {
      name: "The Wild Oasis | Cabin Booking App",
      tech: ["React.js", "Next.js 14", "Tailwind CSS", "Supabase"],
      image: "/images/wildoasis.webP",
      description:
        "A full-stack hotel management application built with Next.js 14. This comprehensive system handles cabin bookings, guest management, and administrative operations with a modern, responsive interface.",
      liveLink: "https://wild-oasis-nextjs-app-uzro.vercel.app/",
      codeLink: "https://github.com/Salman-0090/Wild-oasis-Nextjs-app",
    },
    {
      name: "Expense Tracker",
      tech: ["HTML", "CSS", "React"],
      image: "/images/react-expense-tracker.webP",
      description:
        "A comprehensive expense tracking application built with React. Features include expense categorization, budget monitoring, data visualization with charts, and local storage persistence for financial data.",
      liveLink: "https://expense-tracker-react-01.netlify.app/",
      codeLink: "https://github.com/Salman-0090/expense-tracker-v2",
    },
    {
      name: "React Quiz App",
      tech: ["HTML", "CSS", "React"],
      image: "/images/react-quiz-app.webP",
      description:
        "A modern travel planning application built with React. Features destination discovery, trip itinerary management, travel list creation, and interactive maps for exploring travel destinations worldwide.",

      liveLink: "https://react-quiz-app0012.netlify.app/",
      codeLink: "https://github.com/Salman-0090/React-Quiz-App",
    },

    {
      name: "Travel List",
      tech: ["HTML", "CSS", "React"],
      image: "/images/Travel-list.webP",
      description:
        "A modern travel planning application built with React. Features destination discovery, trip itinerary management, travel list creation, and interactive maps for exploring travel destinations worldwide.",
      liveLink: "https://travel-list-001.netlify.app/",
      codeLink: "https://github.com/Salman-0090/travel-list",
    },

    {
      name: "Pig Game",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/images/pig-game.webP",
      description:
        "A fun two-player dice game built with JavaScript. Features turn switching, score tracking, and simple DOM manipulation for an interactive experience.",
      liveLink: "https://pig-game-app001.netlify.app/",
      codeLink: "https://github.com/Salman-0090/pig-game",
    },

    {
      name: "Array Bankist",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/images/Array-bankist.webP",
      description:
        "A sophisticated banking application focusing on array methods and data manipulation. Features account management, transaction history, loan requests, and real-time balance calculations.",
      liveLink: "https://arrays-bankist-app.netlify.app/",
      codeLink: "https://github.com/Salman-0090/Arrays-Bankist",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="project-about">
        <h3>Featured Projects</h3>
        <p>
          A collection of web applications and interactive projects built with
          modern technologies
        </p>
      </div>
      <div className="projects-section-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="project-info">
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span className="tech-badge" key={i}>
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-project btn-view-project"
                >
                  View Project
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-project btn-source-link"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h3>Contact Me</h3>
      <p>
        If you'd like to work together or just say hi, feel free to reach out!
      </p>
      <div className="contact-links">
        <a href="mailto:Salmank786s@gmail.com">Salmank786s@gmail.com</a>
        <a
          href="https://github.com/Salman-0090"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/salmann-khan/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </div>
    </section>
  );
}

export default App;
