import {CodepenOutlined} from '@ant-design/icons';
import {PictureOutlined} from '@ant-design/icons';
import BrushIcon from '@mui/icons-material/Brush';
import Icon from '@mui/material/Icon';
import './projects.css';

function Skills(){
  return(
  <div className="unselectable">
    <h1 className="flex justify-center title">Skills</h1>
    <div className="skills description unselectable">
      <div className="tc skill">
        <CodepenOutlined style={{fontSize:"80px",cursor:"pointer"}} className="codeIcon"/>
	<h1 className="skillset">Full Stack Developer</h1>
	<p className="skillDescription">Developing web-apps using the Tech MERN-Stack.</p>
        <p className="skillDescription">Also acquanted with deployment at Heroku.</p>
        <p className="skillDescription">Ready to learn new technologies.</p>
      </div>
      <div className = "tc skill">
	<BrushIcon style={{fontSize:"100px",padding:"7px",cursor:"pointer"}} className="codeIcon"/>
	<h1 className="skillset">Sketching</h1>
	<p className="skillDescription">I have great interest in Art, Sketching</p>
        <p className="skillDescription">and Painting and love to do them in free time.</p>
      </div>
    </div>
  </div>
  );
}

export default Skills;
