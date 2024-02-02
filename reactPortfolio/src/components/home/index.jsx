import "animate.css";
import "./style.css";
import Header from '../header'

function Home() {
  return (
    <>
      <Header />
      <div id="aboutme">
        <img src="https://media.licdn.com/dms/image/D4E03AQHA2FoEq6a_jg/profile-displayphoto-shrink_800_800/0/1706003296253?e=1712188800&v=beta&t=UpQ5ZJfmph33pAtQlMBlSz_ZBQdWSkAEHIfEYg1bR3c" alt="profile pic"/>
        <br></br>
        <h1 class="animate__animated animate__bounce">Alexander Walland</h1>
      </div>
    </>
  );
}

export default Home;
