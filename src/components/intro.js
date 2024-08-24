import Typewriter from 'typewriter-effect/dist/core';
import { GithubOutlined, LinkedinFilled, EyeOutlined } from '@ant-design/icons';
import { Button } from "antd";

function Navbar(){
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Former Intern at Paytm')
  .pauseFor(300)
  .deleteChars(22)
  .typeString('Nodejs developer')
  .pauseFor(1000)
  .start();

  const handleClick=()=>{
    window.location.href = `https://drive.google.com/file/d/1mxqz4vSGhZUqLv_EIqmLjrglDPfeFVxx/view`;
    console.log("yes");
  }

  const handleLinkedIn=()=>{
    window.location.href = `https://www.linkedin.com/in/ajayjat99/?profileId=ACoAACpEDH0Bk7SRU8KL3BNUG5N4wMgZ6wBNsdM`;
    console.log("yes");
  }

  const handleGithub=()=>{
    window.location.href = `https://github.com/ajay-jat214`;
    console.log("yes");
  }

  return(
  <div className="flex justify-center" style={{backgroundImage:`url("ajay.jpg")`,backgroundAttachment:"fixed",height:"600px",width:"auto",backgroundRepeat:"no-repeat",backgroundPosition:`50% 50%`}}>
    <div className="unselectable" style={{marginTop:"150px",fontWeight:550,fontSize:"5rem",textAlign:"center"}}>
      <div className="mb4 unselectable">Hello</div>
      <div className="unselectable">I am Ajay</div>
      <div id="app" style={{fontWeight:1,fontSize:"2.5rem", marginTop:"50px", zIndex:1100}}></div>
      <div className = "network-profile mt5 unselectable">
        <a className="github pointer" onClick={handleGithub}>
	  <GithubOutlined style={{fontSize:"35px",padding:"20px"}}/>
        </a>
        <a className="linkedin pointer" onClick={handleLinkedIn}>
	  <LinkedinFilled style={{fontSize:"35px",padding:"20px"}}/>
	</a>
      </div> 
      <Button icon={<EyeOutlined style={{fontSize:"20px"}} className=""/>} style={{backgroundColor:"black",color:"white",cursor:"pointer"}} onClick={handleClick}>Preview Resume</Button>
    </div>
  </div>
  );
}

export default Navbar;
