import "./hero.css";
import profileImg from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profileImg} alt={"Dilnawaz Khan Photo"} />
      <h1>
        <span>I'm Dilnawaz Khan,</span> Mobile App Developer based in Pakistan
      </h1>
      <p>
        I'm React Native devloper with 3 years of experience, currently working
        on KiVVON Mobile App
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="achor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
