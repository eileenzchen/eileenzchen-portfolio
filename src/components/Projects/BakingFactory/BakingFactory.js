import React from 'react'
import { Grid, Container } from '@mui/material';
import Menu from '../../Menu/Menu.js'
import * as BakingFactoryContent from './BakingFactoryContent.js'
import './BakingFactory.css'
import '../Projects.css'

function BakingFactory() {
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
              Learnings:null
              }}></Menu>
          </Grid>
          <Grid item sm={16} md={10} sx={{pb:10}}>
            <BakingFactoryContent.Intro/>
            <BakingFactoryContent.Summary/>
            <BakingFactoryContent.PersonasUseCases/>
            <BakingFactoryContent.QuickSketches/>
            <BakingFactoryContent.ContextualizingDesign/>
            <BakingFactoryContent.Interplay/>
            <BakingFactoryContent.Learnings/>
          </Grid>
        </Grid>
      </Container>
    </>
    
  )
}
 
export default BakingFactory