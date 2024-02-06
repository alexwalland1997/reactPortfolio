import "animate.css";
import "./style.css";
import Header from "../header";
import { RiLinkedinFill, RiGithubFill } from "@remixicon/react";

function Home() {
  return (
    <>
    <Header/>
      <div id="intro">
        <img
          src="https://media.licdn.com/dms/image/D4E03AQHA2FoEq6a_jg/profile-displayphoto-shrink_800_800/0/1706003296253?e=1712188800&v=beta&t=UpQ5ZJfmph33pAtQlMBlSz_ZBQdWSkAEHIfEYg1bR3c"
          alt="profile pic"
        />
        <br></br>
        <h1 class="animate__animated animate__bounceInDown animate__faster">
          Alexander Walland
        </h1>
        <p class="animate__animated animate__bounceInLeft animate__faster">
          Front-end Developer
        </p>
        <p class="animate__animated animate__bounceInUp animate__faster">
          HTML | CSS | Javascript
        </p>
        <a href="https://github.com/alexwalland1997" target="_blank">
          <RiGithubFill className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/alexander-walland-5020b4246/" target="_blank">
          <RiLinkedinFill className="icon" />
        </a>
      </div>
    </>
  );
}

export default Home;
