import classes from "./About.module.css";
import heroBanner from "./home-cover.jpeg";
const About = () => {
  return (
    <div className={classes.about}>
      <img src={heroBanner}></img>
      <div className={classes.content}>
        <div className="candidate-details">
          <h1>
            Hello I'm <span className={classes.name}>Harshil Soni</span>,
            <br></br>A Frontend Developer
          </h1>
          <p>
            Technocrat with 6+ years of experience in the areas of UI
            Development.<br></br>Fascinated by the idea of bringing data and UI
            together.
          </p>
          <div className={classes["contact-me"]}>
            <button className="primary">Contact me!</button>
          </div>
        </div>
        <div className="candidate-summary">
          <p></p>
        </div>
      </div>
    </div>
  );
};
export default About;
