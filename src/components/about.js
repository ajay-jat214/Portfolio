import './projects.css';
function About(){
  return(
  <div className="tc unselectable">
    <h1 className="mb5 title">
      ABOUT<span className="blue">ME</span>
    </h1>
    <p className="f3 monospace description description1" style={{fontSize:"18px"}}>
      <p className="mb3">
        I am Ajay Jat, a final year undergraduate student at the Indian Institute of Information Technology, Gwalior, India, studying Computer Science.
      </p>
      <br/>
      <br/>
      <p className="mb3">
        A geeky enthusiast with a passion of bringing change to the lives of people by harnessing the power of technology and engineering, I love to spend my time on trying new tools, algorithms and brushing up my logic to solve challenging problems and converting them into products that can be used by people. 
      </p>
      <br/>
      <br/>
      <p className="mb3">
        I also play with data structures over ball sometimes. When not behind the screen, you can find me behind the lens, as I love to capture the world through my sketching.
      </p>
    </p>
  </div>
  );
}

export default About;
