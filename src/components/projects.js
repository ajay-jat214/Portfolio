import './projects.css';

function Projects(){

  const handleSmartAlumini=()=>{
    window.location.href = `https://github.com/ajay-jat214/smart-alumini-network`;
    console.log("yes");
  }

  const handleMobileShop=()=>{
    window.location.href = `https://github.com/ajay-jat214/mobile_shop`;
    console.log("yes");
  }

  const handlePortfolio=()=>{
    window.location.href = `https://github.com/ajay-jat214`;
    console.log("yes");
  }

  return(
  <div>
  <h1 className="flex justify-center title unselectable">Projects</h1>
  <div className = "flex flex-wrap justify-center box-container description unselectable">
    <div className = "box" style={{backgroundImage:`url("chat.jpg")`, backgroundSize:"cover", backgroundPosition: "center",cursor:"pointer"}} onClick={handleSmartAlumini}>
      <h1 className="overlay-title">Smart Alumini Network</h1>
      <span className="site-description">
	  A Web Application which allows users to connect to Alumini's according their working field (App dev. , Machine Learner) and making use of personal chatting feature for guidance and making use of fullCalendar section so that tasks can be schedulized.
      </span>
    </div>
    <div className = "box" style={{backgroundImage:`url("edtech.png")`, backgroundSize:"cover", backgroundPosition: "center",cursor:"pointer"}} onClick={handleMobileShop}>
      <h1 className="overlay-title">Ecommerce Website</h1>
      <span className="site-description">
	  A Web Application which allows users to Register or Login and allows the users to save the cart elements in our Cart. CRUD operations on incrementing and decrementing item numbers. Technology
      </span>
    </div>
    <div className = "box" style={{backgroundImage:`url("portfolio.png")`, backgroundSize:"cover", backgroundPosition: "center",cursor:"pointer"}}onClick={handlePortfolio}>
      <h1 className="overlay-title">Portfolio</h1>
      <span className="site-description">
        Hello, Myself Ajay I am graduated from IIIT Gwalior. I am open to Fullstack opportunities.
      </span>
    </div>
  </div>
  </div>
  );
}

export default Projects;
