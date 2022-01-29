import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="links">
          <a
            className="GitHub"
            href="https://github.com/kashfr"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            className="LinkdIn"
            href="https://www.linkedin.com/in/kaheem-freeman-7b8b349b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="copyright-yr">
        <small>&copy; GA SEI Velvet Worms 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
