import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="everything">
        <div>
          <div className="copyright-yr">
            {/* <p>&copy; GA SEI Velvet Worms 2022</p> */}
            <p>
              designed (while struggling a s%@t ton) by Kaheem Freeman 😩 &copy;
            </p>
          </div>
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
      </div>
    </footer>
  );
};

export default Footer;
