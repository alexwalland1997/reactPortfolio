import "animate.css";
import "./style.css";
import Header from "../header";
import Photo from "../photo";

function About() {
  return (
    <>
      <Header />
      <Photo />
      <div id="aboutme">
        <h1>About Me</h1>
        <p>
          A junior front-end developer keen at looking at new and interesting
          ways to design and improve websites. This website will show off a
          selection of my projects which will show of the various skills I hope
          to continue to improve on.
        </p>
        <p>
         I have just completed a 16 week skills bootcamp which had a heavy focus
         of various aspects of web development such as the standards such as HTML,
         CSS and Javascript. With the latter weeks focusing on node.js and React
         which I hope to take further to develop even more interesting and interactive
         sites for me to show off on here.
        </p>
        <p>
         If I had to discribe myself in a few words I would say I am a determined quick learner. 
         I'm always interested in learning and a firm believer that learning if never done regardless
         of how long you have been in the industry.
        </p>
      </div>
    </>
  );
}

export default About;
