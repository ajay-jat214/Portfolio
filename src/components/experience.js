import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { RadarChartOutlined } from '@ant-design/icons';
import './projects.css';

function Experience(){
  return(
  <>
  <h1  className="flex justify-center title unselectable">Experience</h1>
  <h1 className="flex justify-center description unselectable">
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - present"
    icon= <img src="bel.png" alt="BEL" style={{height:"65px",width:"70px",backgroundColor:"white",borderRadius:"80px"}} className="bel"/>
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title" style={{textAlign:"start"}}>Bharat Electronics Ltd.</h3>
    <h5 className="vertical-timeline-element-subtitle" style={{textAlign:"start"}}>Backend developement</h5>
    <h6 className="vertical-timeline-element-subtitle" style={{textAlign:"start"}}>Ghaziabad</h6>
    <p style={{textAlign:"left"}}>
      <p style={{fontSize:"13px"}}>Building High power Radar(Ada and C), Software developement. Developed Simulator to test real time radar environment </p>
      <p style={{fontSize:"13px"}}>Build Analysis tool using Python matlab to analyse the radar processing and efficiency</p>
      <p style={{fontSize:"13px"}}>Developed Radar Data Processing module for Asia’s first indigenous
civil ATMS system at bhubaneshwar, including SRE radar.</p>
      <p style={{fontSize:"13px"}}>Developed a GUI software on QT C++ using Luciad GIS(Geographic
Information System) library for the Operator Workstation of SRE
Radar for Indian Air Force.</p>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - 2022"
    icon = <img src="paytm.svg" alt="Paytm" style={{height:"65px",width:"70px",backgroundColor:"white",borderRadius:"80px"}} className="paytm"/>
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title" style={{textAlign:"start"}}>Paytm</h3>
    <h5 className="vertical-timeline-element-subtitle" style={{textAlign:"start"}}>Backend developement</h5>
    <h6 className="vertical-timeline-element-subtitle" style={{textAlign:"start"}}>Delhi</h6>
    <p style={{textAlign:"left"}}>
      <p style={{fontSize:"13px"}}>Java spring boot, Software developement</p>
      <p style={{fontSize:"13px"}}>Bulk processing of data</p>
      <p style={{fontSize:"13px"}}>Created backend for Surveys in Paytm</p>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - 2022"
    icon= <img src="flamingo.png" alt="FlamingoCourses" style={{height:"65px",width:"70px",backgroundColor:"white",borderRadius:"80px"}} className="flamingo"/>
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title" style={{textAlign:"start"}}>Flamingo Courses LLP</h3>
    <h5 className="vertical-timeline-element-subtitle" style={{textAlign:"start"}}>Frontend developement</h5>
    <h6 className="vertical-timeline-element-subtitle" style={{textAlign:"start"}}>Delhi</h6>
    <p style={{marginLeft:"2px",textAlign:"left"}}>
      <p style={{fontSize:"13px"}}>Made use of the Fullcalendar.io tool,Designed and implemented using antd and material-design</p><br/>
      <p style={{fontSize:"13px"}}>Designed and build the logic for the Leaderboard section,reportCard for the final assessment and evaluation</p><br/>
      <p style={{fontSize:"13px"}}>Assignment of teachers to classes and subjects section on Admin side</p>
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  </h1>
  </>
  );
}

export default Experience;
