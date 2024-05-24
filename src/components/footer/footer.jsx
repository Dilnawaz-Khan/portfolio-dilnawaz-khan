import "./footer.css";
import footerLogo from "../../assets/footer_logo.svg";
import userIcon from "../../assets/user_icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer-top">
        <div className="footer-top-left">
          <img src={footerLogo} alt="footer logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            similique et maxime sequi, esse est?
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={userIcon} alt="user icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div> */}
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2024 Dilnawaz Khan. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          {/* <p>Terms of services</p>
          <p>Privacy Policy</p> */}
          <AnchorLink className="achor-link" offset={50} href="#contact">
            <p>Contact with me</p>
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
