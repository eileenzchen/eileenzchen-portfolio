import React, {useState, useEffect} from 'react'
import './ProjectSummary.css'

function ProjectSummary(props) {
  const roles = props.desc.role.split(', ').join('\n');
  // const skills = props.desc.skills.split(', ').join('\n');
  // const tools = props.desc.tools.split(', ').join('\n');
  // https://codingbeautydev.com/blog/react-get-window-width-height/
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  if (props.desc.cols === 1 || windowSize[0] < 900) {
    // console.log(windowSize[0]);
    return (
      <div className="projectSummary">
      {/* <table>
        <tbody>
          <tr>
            <td style={{fontWeight: 600, letterSpacing:1}}>role</td>
            <td style={{letterSpacing:1}}>{roles}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 600, letterSpacing:1}}>team</td>
            <td style={{letterSpacing:1}}>{props.desc.team}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 600, letterSpacing:1}}>skills</td>
            <td style={{letterSpacing:1}}>{props.desc.skills}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 600, letterSpacing:1}}>tools</td>
            <td style={{letterSpacing:1}}>{props.desc.tools}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 600, letterSpacing:1}}>duration</td>
            <td style={{letterSpacing:1}}>{props.desc.duration}</td>
          </tr>       
          <tr>
            <td style={{fontWeight: 600, letterSpacing:1}}>device</td>
            <td style={{letterSpacing:1}}>{props.desc.device}</td>
          </tr>           
        </tbody>
      </table> */}
          <p>
            <span style={{fontSize: "14px", fontWeight: 600}}>role</span>
            <br></br>
            <span style={{fontSize: "16px",fontWeight: 300}}>{roles}</span>
          </p>
          <p>
          <span style={{fontSize: "14px", fontWeight: 600}}>team</span>
            <br></br>
            <span style={{fontSize: "16px", fontWeight: 300}}>{props.desc.team}</span>
          </p>
          <p>
            <span style={{fontSize: "14px", fontWeight: 600}}>skills</span>
            <br></br>
            <span style={{fontSize: "16px", fontWeight: 300}}>{props.desc.skills}</span>
          </p>
          <p>
            <span style={{fontSize: "14px", fontWeight: 600}}>tools</span>
            <br></br>
            <span style={{fontSize: "16px", fontWeight: 300}}>{props.desc.tools}</span>
          </p>
          <p>
            <span style={{fontSize: "14px", fontWeight: 600}}>duration</span>
            <br></br>
            <span style={{fontSize: "16px", fontWeight: 300}}>{props.desc.duration}</span>
          </p>
          {/* <p style={{fontWeight: 600, letterSpacing:1}}>team</p>
          <p style={{letterSpacing:1}}>{props.desc.team}</p>
          <p style={{fontWeight: 600, letterSpacing:1}}>skills</p>
          <p style={{letterSpacing:1}}>{props.desc.skills}</p>
          <p style={{fontWeight: 600, letterSpacing:1}}>tools</p>
          <p style={{letterSpacing:1}}>{props.desc.tools}</p>
          <p style={{fontWeight: 600, letterSpacing:1}}>duration</p>
          <p style={{letterSpacing:1}}>{props.desc.duration}</p> */}
    </div> 
    )
  }
  else {
    console.log(windowSize[0]);
    return (
      <div className="projectSummary">
      <table>
        <tbody>
          <tr>
            <td style={{fontWeight: 600, letterSpacing:1}}>role</td>
            <td style={{letterSpacing:1}}>{roles}</td>
            <td style={{fontWeight: 600, letterSpacing:1}}>tools</td>
            <td style={{letterSpacing:1}}>{props.desc.tools}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 600, letterSpacing:1}}>team</td>
            <td style={{letterSpacing:1}}>{props.desc.team}</td>
            <td style={{fontWeight: 600, letterSpacing:1}}>duration</td>
            <td style={{letterSpacing:1}} className="">{props.desc.duration}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 600, letterSpacing:1}}>skills</td>
            <td style={{letterSpacing:1}} className="">{props.desc.skills}</td>
          </tr>             
        </tbody>
      </table>
    </div> 
    )
  }
}

export default ProjectSummary