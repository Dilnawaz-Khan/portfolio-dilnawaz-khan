import "./services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import Services_Data from "../../assets/services_data";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt={"theme pattern image"} />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={service.s_no} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            {/* <div className="services-read-more">
              <p>Read More</p>
              <img src={arrow_icon} alt={"arrow icon image"} />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
