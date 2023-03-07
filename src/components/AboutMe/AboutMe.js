import { useEffect, useState } from "react";
import Body from "./About-me.png";
import Mind from "./mind.png";
import "./AboutMe.css";
import cv from "./harshil.pdf";

const AboutMe = () => {
  const [loadBg, setLoadBg] = useState(false);
  const [heroBannerClass, setHeroBannerClass] = useState(
    "hero-banner-bg-block"
  );
  const [bottomBlock, setBottomBlock] = useState("bottom-block");
  const [heroTextClass, setHeroTextClass] = useState("hero-text");
  const [heroDesc, setHeroDesc] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoadBg(true);
    }, 2000);
  }, []);
  useEffect(() => {
    if (loadBg) {
      setTimeout(() => {
        setHeroBannerClass("hero-banner-bg-block active");
      }, 1000);
    }
  }, [loadBg]);

  useEffect(() => {
    if (heroBannerClass.includes("active")) {
      setTimeout(() => {
        setBottomBlock("bottom-block active");
      }, 1000);
    }
  }, [heroBannerClass]);

  useEffect(() => {
    if (bottomBlock.includes("active")) {
      setTimeout(() => {
        setHeroTextClass("hero-text active");
        setHeroDesc("active");
      }, 800);
    }
  }, [bottomBlock]);
  const headBgBlock = loadBg ? "header-bg-block active" : "header-bg-block";

  const scrollToHandler = (id) => {
    var elem = document.getElementById(id);
    elem.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <div className="about-me">
      <div className="conainer-aboutme">
        <div className={headBgBlock}>
          <div className="under-images">
            <img src={Body} className="img-1" alt="bodyanimateed"></img>
            <img src={Mind} className="img-2" alt="mindanimated"></img>
          </div>
        </div>
        <div className={heroBannerClass}></div>
        <div className={bottomBlock}>
          <div className="profiles-link">
            <button onClick={() => scrollToHandler("projects")}>
              latest work
            </button>
            <a rel="noopener noreferrer" href={cv} download>
              download cv
            </a>
            <button onClick={() => scrollToHandler("contactus")}>
              contact me
            </button>
          </div>
        </div>
        <div className={heroTextClass}>
          <span>UI</span>
          <span>Expert</span>
        </div>
        <div className={`desc ${heroDesc}`}>
          <div className="candidate-details">
            <h1>
              Hello I'm <span className="About_name__udJms">Harshil Soni</span>
              <br></br>A Frontend Developer
            </h1>
            <p>
              Technocrat with 6+ years of experience in the areas of UI
              Development. Fascinated by the idea of bringing data and UI
              together.
            </p>
            <div className="About_contact-me__RbMkr">
              <br></br>
              <button className="primary-anchor" onClick={() => scrollToHandler("projects")}>
                Learn More!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
