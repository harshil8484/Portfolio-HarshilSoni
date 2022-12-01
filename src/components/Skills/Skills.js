import { skills } from "../../data/skills";
import skill from "./skills.png";
const Skills = () => {
  const technologies = skills[0].technology;
  const designingTools = skills[0].designingTools;
  const platforms = skills[0].platforms;
  return (
    <section id="skills">
      <div className="skills-block">
        <div className="heading-1">
          <h1 className="titles">
            <span>Skills</span>
            <span> 💻</span>
          </h1>
        </div>
        <div className="skill-list-block">
          <div className="skills-block">
            <div className="skill-title">
              Technology
              <span className="icon">
                <img
                  src={skills[0].otherIcons[0]}
                  className="invert"
                  alt="technology"
                ></img>
              </span>
            </div>
            <div className="skill-list">
              {technologies.map((item) => (
                <div className="skill-item-name" key={item.name}>
                  <span className="img-icon">
                    <img src={skill} alt={item.name}></img>
                  </span>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          <div className="skills-block">
            <div className="skill-title">
              Desiging Tools
              <span className="icon">
                <img
                  src={skills[0].otherIcons[1]}
                  className="invert"
                  alt="designing-tool"
                ></img>
              </span>
            </div>
            <div className="skill-list">
              {designingTools.map((item) => (
                <div className="skill-item-name" key={item.name}>
                  <span className="img-icon">
                    <img src={skill} alt={item.name}></img>
                  </span>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          <div className="skills-block">
            <div className="skill-title">
              Platforms
              <span className="icon">
                <img
                  src={skills[0].otherIcons[2]}
                  className="invert"
                  alt="platform"
                ></img>
              </span>
            </div>
            <div className="skill-list">
              {platforms.map((item) => (
                <div className="skill-item-name" key={item.name}>
                  <span className="img-icon">
                    <img src={skill} alt={item.name}></img>
                  </span>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
