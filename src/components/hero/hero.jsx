import "./hero.css";
import profileImg from "../../assets/profile_img.svg";
import myResume from "../../docs/Resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const KiVVON_PLAYSTORE_LINK =
  "https://play.google.com/store/apps/details?id=com.kivvonmobile&hl=en&gl=US";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profileImg} alt={"Dilnawaz Khan Photo"} />
      <h1>
        <span>I'm Dilnawaz Khan,</span> Mobile App Developer based in Pakistan
      </h1>
      <p>
        I'm React Native devloper with 3+ years of experience, currently working
        on{" "}
        <a
          href={KiVVON_PLAYSTORE_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          KiVVON Mobile App
        </a>
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="achor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume" download="dilnawaz-khan.pdf">
          <a href={myResume}>My Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
