import { skills } from "../../data/skills";
const Footer = () => {
  const getDate = new Date();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-block">
          <div className="footer-title">
            <p>© Copyright {getDate.getFullYear()}. Made by Harshil Soni</p>
          </div>
          {/* <div className="links">
            <a
              href="https://www.linkedin.com/in/harshil-soni-2b02669b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={skills[0].otherIcons[3]} alt="Linkendin"></img>
              </span>
            </a>
            <a href="tel:+917204984034">
              <span className="icon">
                <img
                  src={skills[0].otherIcons[4]}
                  className="invert"
                  alt="tel"
                ></img>
              </span>
            </a>
            <a href="mailto:harshilsoni888@gmail.com">
              <span className="icon">
                <img src={skills[0].otherIcons[5]} alt="mail"></img>
              </span>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
