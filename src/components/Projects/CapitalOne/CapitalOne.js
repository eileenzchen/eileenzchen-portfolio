import React from 'react'
import { Grid, Container } from '@mui/material';
import Menu from '../../Menu/Menu.js'
import * as CapitalOneContent from './CapitalOneContent.js'
import './CapitalOne.css'
import MoreProjects from '../MoreProjects/MoreProjects.js'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

function CapitalOne() {
  return (
    <>
      {/* return home link */}
      <Container maxWidth="xl" style={{marginLeft:"0px"}}>
        <a href="/" className="return-home-link">
          <span className="return-home-container">
            <KeyboardArrowLeftRoundedIcon sx={{mr:1}} style={{marginTop: "1px"}}/>
            <span>return home</span>
          </span>
        </a>
      </Container>
      <Container className="project-content" maxWidth="xl">
        <Grid container columns={16} columnSpacing={12}>
          <Grid className="menuBlock" item sm={0} md={3}>
            <Menu menuItems={{
              BackToTop: null,
              Summary: null,
              SearchEnhancements: null,
              BlogRedesign: null,
              AdobeTargetTesting: null,
              AutomatingData: null
              }}></Menu>
          </Grid>
          <Grid item sm={16} md={10} sx={{pb:10}} data-aos="fade-up">
            <CapitalOneContent.Intro/>
            <CapitalOneContent.Summary/>
            <CapitalOneContent.SearchEnhancements/>
            <CapitalOneContent.BlogRedesign/>
            <CapitalOneContent.AdobeTargetTesting/>
            <CapitalOneContent.AutomatingData/>
          </Grid>
        </Grid>
      </Container>
      <MoreProjects relatedProjects={['Fitvio', 'Weee', 'What2Yum']}/>
    </>
    
  )
}
 
export default CapitalOne