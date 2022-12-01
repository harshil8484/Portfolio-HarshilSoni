import { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
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
            <li className={classes.logo}>Harshil Soni</li>
            <li
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
            </li>
          </ul>
        </div>
        <div className={classes["hire-me"]}>
          <button
            onClick={() => {
              scrollToHandler("contactus");
            }}
            className="contact-me"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
