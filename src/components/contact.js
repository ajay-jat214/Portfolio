import { useState,useRef } from 'react';
import { MailOutlined } from '@ant-design/icons';
import "../css/navbar.css";

function Contact(){
  const handleClick = () => {
     console.log("handle click");
    // Create a mailto URL with the recipient email
    const to="jatajay004@gmail.com";
    const mailtoUrl = `mailto:${to}`;
    // Redirect to the mailto URL
    window.location.href = mailtoUrl;
  };
  return(
    <div style={{display:"flex",justifyContent:"center",fontSize:"30px",cursor:"pointer"}} >
      <MailOutlined />
      <div onClick={handleClick} style={{paddingLeft:"20px"}}>Contact Me</div>
    </div>
  );
}

export default Contact;
