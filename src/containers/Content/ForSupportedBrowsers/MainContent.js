import React from 'react';

import Grid from '@material-ui/core/Grid';

import ScrollUpButton from '../../ScrollUpButton/ScrollUpButton';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Landing from '../../../components/Landing/Landing';
import About from '../../../components/About/About';
import Resume from '../../../components/Resume/Resume';
import Muses from '../../../components/Muses/Muses';
import Contact from '../../../components/Contact/Contact';
import Projects from '../../../components/Projects/Projects';

const Supported = (props) => {
  return (
    <Grid container direction='column'>
      <Grid item>
        <ScrollUpButton />
      </Grid>
      <Grid item>
        <Header toggler={props.toggleTheme} />
      </Grid>
      <Grid item id='landing'>
        <Landing />
      </Grid>
      <Grid item id='about'>
        <About />
      </Grid>
      <Grid item id='education'>
        <Resume />
      </Grid>
      {/* <Grid item id='projects'>
        <Projects />
      </Grid> */}
      <Grid item id='muses'>
        <Muses />
      </Grid>
      {/* <Grid item id='contact'>
        <Contact />
      </Grid> */}
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Supported;
