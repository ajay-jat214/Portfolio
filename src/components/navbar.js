import { useState,useRef } from 'react';
import "../css/navbar.css";

//const hamburger = document.querySelector(".hamburger");
//const navMenu = document.querySelector(".nav-menu");

//hamburger.addEventListener("click", mobileMenu);

//function mobileMenu() {
//    hamburger.classList.toggle("active");
//    navMenu.classList.toggle("active");
//}


//function closeMenu() {
//    hamburger.classList.remove("active");
//    navMenu.classList.remove("active");
//}

function Navbar({handleNavLink}){
  const navMenu = useRef(document.querySelector(".nav-menu"));
  const [isactive,setIsactive] = useState(false);
  const [isBarSelected,setIsBarSelected] = useState(false);
  const mobileMenu = (event) =>{
    event.preventDefault();
    setIsBarSelected(!isBarSelected);
    setIsactive(!isactive);
  }

  const handleNavLink1=(e,val)=>{
    e.preventDefault();
    setIsactive(!isactive);
    setIsBarSelected(!isBarSelected);
    handleNavLink(val);
  }
  const navLink = document.querySelectorAll(".nav-link");

//navLink.forEach(n => n.addEventListener("click", closeMenu));

  return(
  <div className="flex justify-center" style={{fontSize:"17px"}}>
        <nav className={`nav-menu ${isactive?'active':''}`}>
            <ul className={`nav-menu ${isactive?'active':'hey'}`}>
                <li className="nav-item" onClick={(e)=>handleNavLink1(e,1)}>
                    <h2 href="#" className="nav-logo pointer">INTRODUCTION</h2>
                </li>
                <li className="nav-item" onClick={(e)=>handleNavLink1(e,2)}>
                    <h2 href="#" className="nav-link pointer">ABOUT</h2>
                </li>
                <li className="nav-item" onClick={(e)=>handleNavLink1(e,3)}>
                    <h2 href="#" className="nav-link pointer">SKILLS</h2>
                </li>
                <li className="nav-item" onClick={(e)=>handleNavLink1(e,4)}>
                    <h2 href="#" className="nav-link pointer">TECHNOLOGIES</h2>
                </li>
                <li className="nav-item" onClick={(e)=>handleNavLink1(e,5)}>
                    <h2 href="#" className="nav-link pointer">EXPERIENCE</h2>
                </li>
                <li className="nav-item" onClick={(e)=>handleNavLink1(e,6)}>
                    <h2 href="#" className="nav-link pointer">PROJECTS</h2>
                </li>
            </ul>
        </nav>
            <div className={`hamburger ${isactive?'active':''}`} onClick={(event)=>mobileMenu(event)}>
                <span className={`bar ${isBarSelected?"l1":''}`}></span>
                <span className={`bar ${isBarSelected?"l2":''}`}></span>
                <span className={`bar ${isBarSelected?"l3":''}`}></span>
            </div>
  </div>
  );
}

export default Navbar;
