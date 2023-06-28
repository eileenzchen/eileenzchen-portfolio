import React, {useState, useEffect} from 'react'
import './ProjectSummary.css'

function ProjectSummary(props) {
  const roles = props.desc.role.split(', ').join('\n');
  const skills = props.desc.skills.split(', ').join('\n');
  const tools = props.desc.tools.split(', ').join('\n');
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
    console.log(windowSize[0]);
    return (
      <div className="projectSummary">
      <table>
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
            <td style={{letterSpacing:1}}>{skills}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 600, letterSpacing:1}}>tools</td>
            <td style={{letterSpacing:1}}>{tools}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 600, letterSpacing:1}}>duration</td>
            <td style={{letterSpacing:1}}>{props.desc.duration}</td>
          </tr>               
        </tbody>
      </table>
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
            <td className="monospace-500">role</td>
            <td className="monospace-400 extra-padding">{roles}</td>
            <td className="monospace-500">tools</td>
            <td className="monospace-400">{tools}</td>
          </tr>
          <tr>
            <td className="monospace-500">team</td>
            <td className="monospace-400 extra-padding">{props.desc.team}</td>
            <td className="monospace-500">duration</td>
            <td className="monospace-400">{props.desc.duration}</td>
          </tr>
          <tr>
            <td className="monospace-500">skills</td>
            <td className="monospace-400">{skills}</td>
          </tr>             
        </tbody>
      </table>
    </div> 
    )
  }
}

export default ProjectSummary