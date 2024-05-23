import "./my-work.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="work" className="my-work">
      <div className="my-work-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt={"theme pattern image"} />
      </div>
      <div className="my-work-container">
        {mywork_data.map((mywork) => (
          <img key={mywork.w_no} src={mywork.w_img} alt={mywork.w_name} />
        ))}
      </div>
      <div className="my-work-show-more">
        <p>Show More</p>
        <img src={arrow_icon} alt={"arrow icon icon"} />
      </div>
    </div>
  );
};

export default MyWork;
