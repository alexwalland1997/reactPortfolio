import "./style.css";
import {
  RiCodeSSlashLine,
  RiProfileFill,
  RiFileListLine,
  RiHomeFill,
  RiContactsFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";


function Header() {
  return (
    <>
      <img src="./images/logo.png" className="logo"/>
      <nav>
        <div id="navigation">
        <RiHomeFill className="icon"/>
        <RiProfileFill className="icon"/>
        <RiCodeSSlashLine className="icon"/>
        <RiFileListLine className="icon"/>
        <RiContactsFill className="icon"/>
        </div>
      </nav>
    </>
  );
}

export default Header;
