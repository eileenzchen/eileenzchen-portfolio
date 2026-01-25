import React from 'react';
import './Resume.css';
import SecondaryButton from '../SecondaryButton/SecondaryButton.js';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import tonysImageCropped from './me_w_tonys_pizza_cropped.jpg'

function Resume() {
  return (
    <>
      <Container maxWidth="sm" className="resume">
        <Grid container columns={4} columnSpacing={2} alignItems="center" className="resume-section">
          <Grid item xs={1}>
            <div className="circle-mask">
              <img src={tonysImageCropped} alt="Eileen Chen"/>
            </div>
          </Grid>
          <Grid item xs={3}>
            <h1 className="monospace-400">Eileen Chen</h1>
            <p>Product Designer & Software Engineer</p>
            <p><a className="content-link" href="www.linkedin.com/in/eileenzchen" target="_blank" rel="noopener noreferrer">linkedin.com/in/eileenzchen</a></p>
          </Grid>
        </Grid>
        <Grid container columns={4} columnSpacing={2} alignItems="center" className="resume-section">
          <Grid item xs={4}>
            <h2>About</h2>
            <p>Not your average designer—my skills lie in product design, engineering, and cross-team collaboration. As someone who’s designed and coded digital experiences, I can empathize with dev teams and understand tech requirements to ensure shippable, high-quality designs.</p>
          </Grid>
        </Grid>
        <Grid container columns={4} columnSpacing={2} alignItems="top" className="resume-section">
          <Grid item xs={4}>
            <h2>Work experience</h2>
          </Grid>
          <Grid item xs={1}>
            <p>2021 — 2025</p>
          </Grid>
          <Grid item xs={3} className="resume-subsection">
            <p className="heading"> Sr. Associate Full-Stack Developer at Capital One</p>
            <p className="subheading">San Francisco, CA</p>
            <p>
              <ul>
                <li>
                  Implementing new components and user flows for a cohesive and accessible search experience on capitalone.com
                </li>
                <li>
                Developing and launching machine learning and A/B tests with Adobe Target for Capital One's homepage, digital hub, and blog
                </li>
                <li>
                  Mentoring junior engineers and interns, supporting onboarding to their teams and tech stacks, and helping them grow their careers
                </li>
                <li>
                  Cross-collaborated with 15+ stakeholders across design brand, and product to launch a redesigned article layout for capitalone.com
                </li>
              </ul>
            </p>
          </Grid>
          <Grid item xs={1}>
            <p>2020 — 2021</p>
          </Grid>
          <Grid item xs={3} className="resume-subsection">
            <p className="heading">Head of Design at Fitvio</p>
            <p className="subheading">remote</p>
            <p>
              <ul>
                <li>
                  Designed Fitvio’s brand guidelines and socialized them with the team to establish a cohesive brand identity
                </li>
                <li>
                  Championed human-centered design and design thinking within the team by leading customer empathy workshops
                </li>
                <li>
                  Created Fitvio’s product roadmap with co-founders
                </li>
              </ul>
            </p>
          </Grid>
          <Grid item xs={1}>
            <p>2025 — present</p>
          </Grid>
          <Grid item xs={3}>
            <p className="heading">Course Assistant at Stanford d.school (DESIGN 235)</p>
            <p className="subheading">Stanford, CA</p>
            <p>
              <ul>
                <li>
                  Designed course experience including reflection guide for students to assess career goals, spatial layout of the classroom to maximize connection between students & guest speakers, and more.
                </li>
              </ul>
            </p>
          </Grid>
          <Grid item xs={1}>
            <p>2019</p>
          </Grid>
          <Grid item xs={3}>
            <p className="heading">Design Research Assistant at CMU HCI Institute</p>
            <p className="subheading">Pittsburgh, PA</p>
            <p>
              <ul>
                <li>
                  Designed and playtested a Unity desktop game based on social efficacy theory to promote positive cybersecurity behaviors
                </li>
                <li>
                Co-published a <a className="content-link" href="https://dl.acm.org/doi/abs/10.1145/3357236.3395522?casa_token=lA0WYQr6nzgAAAAA:AD5OuY--v236wQYx80ZL8_sBJnHMXJsrTmZ7jjxg7MUm4AQgdOqwMyAHYRC_--uYPwer8YEVudnt" target="_blank" rel="noopener noreferrer">paper in the Association for Computing Machinery</a>
                </li>
              </ul>
            </p>
          </Grid>
        </Grid>
        <Grid container columns={4} columnSpacing={2} alignItems="top" className="resume-section">
          <Grid item xs={4}>
            <h2>Education</h2>
          </Grid>
          <Grid item xs={1}>
            <p>2025 — 2027</p>
          </Grid>
          <Grid item xs={3} className="resume-subsection">
            <p className="heading">Stanford University</p>
            <p className="subheading">M.S. Design</p>
          </Grid>
          <Grid item xs={1}>
            <p>2017 — 2021</p>
          </Grid>
          <Grid item xs={3}>
            <p className="heading">Carnegie Mellon University</p>
            <p className="subheading">B.S. Information Systems</p>
            <p className="subheading">minor in Human-Computer Interaction</p>
            <p className="subheading">GPA: 4.0/4.0</p>
          </Grid>
        </Grid>
        <Grid container columns={4} columnSpacing={2} alignItems="top" className="resume-section">
          <Grid item xs={4}>
            <h2>Certifications</h2>
          </Grid>
          <Grid item xs={1}>
            <p>Cloud Architect</p>
          </Grid>
          <Grid item xs={3}>
            <p className="heading">AWS Certified Solutions Architect (<a href="https://www.credly.com/badges/43c15d51-1a42-4eba-bdd3-d66e08b320d8/public_url" className="content-link" target="_blank" rel="noopener noreferrer">credential badge</a>)</p>
          </Grid>
        </Grid>
        <Grid container columns={4} columnSpacing={2} alignItems="top" className="resume-section">
          <Grid item xs={4}>
            <h2>Awards</h2>
          </Grid>
          <Grid item xs={1}>
            <p>Honor Societies</p>
          </Grid>
          <Grid item xs={3} className="resume-subsection">
            <p className="heading"><a href="https://www.pbk.org/" target="_blank" className="content-link" rel="noopener noreferrer">Phi Beta Kappa</a> Honor Society</p>
            <p className="heading"><a href="https://www.alphaiotadelta.com/" target="_blank" className="content-link" rel="noopener noreferrer">Alpha Iota Delta</a> Honor Society</p>
          </Grid>
          <Grid item xs={1}>
            <p>Distinctions</p>
          </Grid>
          <Grid item xs={3} className="resume-subsection">
            <p className="heading"><a href="https://www.cmu.edu/sfs/financial-aid/types/scholarships-and-grants/university.html" target="_blank" className="content-link" rel="noopener noreferrer">Presidential Scholarship</a></p>
            <p className="heading"><a href="https://www.cmu.edu/engage/give/donor-recognition/andrew-carnegie-society/acs-scholars.html" target="_blank" className="content-link" rel="noopener noreferrer">Andrew Carnegie Scholar</a></p>
            <p className="heading"><a href="https://www.cmu.edu/cmwa/awards/2020-2021.html" target="_blank" className="content-link" rel="noopener noreferrer">Outstanding Female Award</a></p>
            <p className="heading"><a href="https://www.cmu.edu/student-affairs/slice/traditions/senior-leadership/index.html" target="_blank" className="content-link" rel="noopener noreferrer">Senior Leadership Recognition</a></p>
          </Grid>
          <Grid item xs={1}>
            <p>Awards</p>
          </Grid>
          <Grid item xs={3}>
            <p className="heading">Chili Pepper Award for Best Web Design and Development — <a href="/bakingfactory" className="content-link" rel="noopener noreferrer">eileenzchen.com/bakingfactory</a></p>
          </Grid>
        </Grid>
        <div className="resume-button">
          <SecondaryButton buttonText="open resumé" icon={<OpenInNewRoundedIcon sx={{ml: 1}} style={{paddingTop: "2px"}}/>} buttonLink={process.env.PUBLIC_URL + '/EileenChen-resume.pdf'} target="_blank" rel="noopener noreferrer"/>
        </div>

      </Container>
    </>
  );
}


export default Resume;
