import React from 'react'
import { Grid, Container } from '@mui/material';
import Menu from '../../Menu/Menu.js'
import * as BakingFactoryContent from './BakingFactoryContent.js'
import './BakingFactory.css'
import '../Projects.css'
import MoreProjects from '../MoreProjects/MoreProjects.js'

function BakingFactory() {
  document.title = "Baking Factory — Eileen Chen";
  return (
    <>
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
          <Grid item sm={16} md={10} sx={{pb:10}} data-aos="fade-up">
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
      <MoreProjects relatedProjects={['CapitalOne', 'Weee', 'What2Yum']}/>
    </>
    
  )
}
 
export default BakingFactory