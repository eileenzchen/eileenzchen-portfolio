import React from 'react'
import { Grid, Container } from '@mui/material';
import Menu from '../../Menu/Menu.js'
import * as BakingFactoryContent from './BakingFactoryContent.js'
import './BakingFactory.css'
import '../Projects.css'
import MoreProjects from '../MoreProjects/MoreProjects.js'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

function BakingFactory() {
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
              Summary:null,
              PersonasUseCases:null,
              QuickSketches:null,
              ContextualizingDesign:null,
              Interplay:null,
              Challenges:null
              }}></Menu>
          </Grid>
          <Grid item sm={16} md={10} sx={{pb:10}}>
            <BakingFactoryContent.Intro/>
            <BakingFactoryContent.Summary/>
            <BakingFactoryContent.PersonasUseCases/>
            <BakingFactoryContent.QuickSketches/>
            <BakingFactoryContent.ContextualizingDesign/>
            <BakingFactoryContent.Interplay/>
            <BakingFactoryContent.Challenges/>
          </Grid>
        </Grid>
      </Container>
      <MoreProjects relatedProjects={['Weee', 'What2Yum', 'Fitvio']}/>
    </>
    
  )
}
 
export default BakingFactory