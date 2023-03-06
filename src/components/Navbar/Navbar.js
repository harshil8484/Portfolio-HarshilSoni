import { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import github from "./github.png";
import linkedin from "./linkedin.png";

const Navbar = () => {
  const [navbarStick, setNavBarStick] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > 300) {
        setNavBarStick(true);
      } else {
        setNavBarStick(false);
      }
    });
  }, []);

  const scrollToHandler = (id) => {
    var elem = document.getElementById(id);
    elem.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <header
      className={`${classes.navbar} ${navbarStick ? classes.stick : ""}  `}
    >
      <div className={classes["navbar-content"]}>
        <div className={classes.links}>
          <ul>
            <li className={classes.logo}>
              <span>harshil.</span>
              <span>ui developer</span>  
            </li>
            {/* <li
              onClick={() => {
                scrollToHandler("projects");
              }}
            >
              Projects
            </li>
            <li
              onClick={() => {
                scrollToHandler("skills");
              }}
            >
              Skills
            </li> */}
          </ul>
        </div>
        <div className="middle-nav">
            <a href="https://www.linkedin.com/in/harshil-soni-2b02669b/" target="_blank">  
              <img src={github}/>
            </a>
            <a href="https://github.com/harshil8484" target="_blank"> 
              <img src={linkedin}/>
            </a>
        </div>
        <div className={classes["hire-me"]}>
        <a
           href="mailto:harshilsoni888@gmail.com" 
            className="contact-me email"
          >
            email me
          </a>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
