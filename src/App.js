import { useRef } from 'react';
import { useState, useEffect } from 'react';
import Navbar from "./components/navbar";
import Intro from './components/intro';
import About from './components/about';
import Skills from './components/skills';
import Tech from './components/tech';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import { UpOutlined } from '@ant-design/icons';
import './App.css';


const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'technologies', label:'Technologies' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

function App() {
  const intro = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const tech = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };


  const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight){ 
            setActiveSection(section.id);
	  }
        }
      });
    };

  const handleNavLink=(val)=>{
    if(val == 1)
      scrollToSection(intro);
    else if(val==2)
      scrollToSection(about);
    else if(val==3)
      scrollToSection(skills);
    else if(val==4)
      scrollToSection(tech);
    else if(val==5)
      scrollToSection(experience);
    else if(val==6)
      scrollToSection(projects);
  }
  window.addEventListener('scroll',function(){
    handleScroll();
    const bottomUp = document.getElementById('bottomUp');
    if(window.scrollY>700){
      bottomUp.classList.add('visible');
    }
    else{
      bottomUp.classList.remove('visible');
    }
  });

  return (
    <div className="center bg-black white App" style={{padding:"20px",background:"black"}}>
      <div style={{zIndex:2,background:"black",width:"100%",zIndex:110,position:"fixed",marginTop:"-20px"}} className="pt4 pb4 unselectable bgblur">
        <Navbar handleNavLink={handleNavLink} />
      </div>
      <div className="mb6" ref={intro}><Intro handleNavLink={handleNavLink}/></div>
      <button id="bottomUp"className="pointer tc w100 fixed" onClick={()=>handleNavLink(1)} style={{left:"50%",zIndex:"1120",borderRadius:"30px"}}>
        <UpOutlined style={{fontSize:"40px",color:"black",backgroundColor:"white",borderRadius:"30px",padding:"5px"}}/>
      </button>
      <div>
        <div id={`about`} className="mb6" ref={about}><About /></div>
        <div id={`skills`} className="mb6" ref={skills}><Skills /></div>
        <div id={`technologies`} className="mb6" ref={tech}><Tech /></div>
        <div id={`experience`} className="mb6" ref={experience}><Experience /></div>
        <div id={`projects`} className="mb6" ref={projects}><Projects /></div>
        <div className="mb6" ref={projects}>
	  <hr className="horizontalLine"style={{maxWidth:"2000px",marginBottom:"10px"}}/>
	  <Contact />
	  <hr className="horizontalLine" style={{maxWidth:"2000px",marginTop:"10px"}}/>
	</div>
      </div>
    </div>
  );
}

export default App;
