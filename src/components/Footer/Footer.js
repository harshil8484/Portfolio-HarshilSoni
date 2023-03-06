const Footer = () => {
  const getDate = new Date();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-block">
          <div className="footer-title">
            <p>© Copyright {getDate.getFullYear()}. Made by Harshil Soni</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
