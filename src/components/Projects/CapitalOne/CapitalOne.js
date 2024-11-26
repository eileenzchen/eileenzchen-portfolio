import React, { useEffect, useState } from 'react'
import { Grid, Container } from '@mui/material';
import Menu from '../../Menu/Menu.js'
import Verification from '../../Verification/Verification.js'
import * as CapitalOneContent from './CapitalOneContent.js'
import './CapitalOne.css'
import MoreProjects from '../MoreProjects/MoreProjects.js'

function CapitalOne(props) {
  document.title = "Capital One — Eileen Chen";
  
  const [isVerified, setIsVerified] = useState(false);
  useEffect(() => {
    if (window.sessionStorage.getItem('verified') === 'true') {
      setIsVerified(true);
    }
    else {
      setIsVerified(false);
    }
  }, [])

  // const checkPw = () => {
  //   // gets the current input value
  //   const answer = document.getElementById("password-input").value;
  
  //   if (answer === "yourSecretPassword") { 
  //     setIsVerified(true);
  //   } else {
  //     alert("Sorry, that's not it");
  //   }
  // };

  const callbackVerified = (val) => {
    setIsVerified(val);
  } 

  // if (!isVerified) {
  //   return (
  //     <>
  //       <Verification></Verification>
  //     </>
  //   )
  // }
  // else {
    return (
      <>
        <Container className="project-content" maxWidth="xl">
          <Grid container columns={16} columnSpacing={12}>
            <Grid className="menuBlock" item sm={0} md={3}>
              <Menu menuItems={{
                BackToTop: null,
                // Summary: null,
                Context: null,
                Problem: null,
                Solution: null,
                // WeighingTradeoffs: null,
                // UserFlows: null,
                // HCD: null,
                Search: null,
                Homepage: null,
                Impact: null,
                }}></Menu>
            </Grid>
            <Grid item sm={16} md={13} sx={{pb:10}} data-aos="fade-up">
              <CapitalOneContent.Intro/>
              <CapitalOneContent.Context/>
              {/* <CapitalOneContent.Summary/> */}
              <Verification verified={isVerified} sendVerified={callbackVerified}/>
              <div style={{display: isVerified ? 'block' : 'none'}}>
              {/* <div> */}
                <CapitalOneContent.Problem/>
                <CapitalOneContent.Solution/>
                {/* <CapitalOneContent.WeighingTradeoffs/> */}
                {/* <CapitalOneContent.UserFlows/> */}
                {/* <CapitalOneContent.HCD/> */}
                <CapitalOneContent.Search/>
                <CapitalOneContent.Homepage/>
                <CapitalOneContent.Impact/>
              </div>
              {/* <CapitalOneContent.AutomatingData/> */}
            </Grid>
          </Grid>
        </Container>
        <MoreProjects relatedProjects={['Fitvio', 'Weee', 'What2Yum']}/>
      </>
  
    )
  // }

}
 
export default CapitalOne