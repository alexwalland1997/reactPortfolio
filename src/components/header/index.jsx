import "./style.css";
import { Link } from 'react-Router-dom';
import {
  RiCodeSSlashLine,
  RiProfileFill,
  RiFileListLine,
  RiHomeFill,
  RiContactsFill,
} from "@remixicon/react";

function Header() {
  return (
    <>
      <nav>
          <img src="https://github.com/alexwalland1997/reactPortfolio/blob/main/images/logo.png?raw=true" className="logo" />
        <div id="navigation">
          <Link to="/reactPortfolio/">
            <RiHomeFill className="icon" />
          </Link>
          <Link to="/aboutme">
            <RiProfileFill className="icon" />
          </Link>
          <Link to="/projects">
            <RiCodeSSlashLine className="icon" />
          </Link>
          <a href="https://docs.google.com/document/d/1cxB9FnwI9OufTwiU_4CaTDIDpU7XKtrD/edit?usp=sharing&ouid=103389772454062363642&rtpof=true&sd=true" target="_blank">
            <RiFileListLine className="icon" />
          </a>
          <Link to="/contactme">
            <RiContactsFill className="icon" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
