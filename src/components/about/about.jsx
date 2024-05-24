import "./about.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profileImg from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt={"Theme pattern image"} />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profileImg} alt={"profile image of Dilnawaz Khan"} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm Dilnawaz Khan, a passionate and skilled React Native developer
              with a robust background in cross-platform app
              development,architecture, and performance optimization. My journey
              in the tech world has been fueled by a relentless curiosity and a
              drive to create user-centric applications that deliver exceptional
              experiences.
            </p>
            <p>
              I thrive on tackling new challenges and am always eager to
              contribute to innovative projects.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>React Native</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>TypeScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>Projects completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
