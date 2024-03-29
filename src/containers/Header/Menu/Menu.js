import React from 'react';

import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';

import { useStyles } from './styles';

const Menu = (props) => {
  const classes = useStyles();

  return (
    <Modal open={props.openMenu} hideBackdrop className={classes.menu}>
      <>
        <Grid container>
          <Grid item>
            <IconButton
              className={classes.closeIconButton}
              onClick={() => props.setOpenMenu(false)}
            >
              <CloseIcon className={classes.closeIcon} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          style={{ height: '100%', outline: 'none' }}
        >
          <Grid item style={{ marginTop: '-8em', marginBottom: '2em' }}>
            <Tooltip title='Home'>
              <IconButton className={classes.logoIcon}>
                <Grid
                  item
                  component={'img'}
                  src='/assets/logo.png'
                  className={classes.logo}
                  alt='logo'
                  onClick={() => {
                    props.setOpenMenu(false);
                    props.scrollToTop();
                  }}
                />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <List disablePadding>
              <ListItem
                button
                className={classes.button}
                onClick={() => {
                  props.setOpenMenu(false);
                  props.scrollIntoView('#about');
                }}
              >
                <ListItemText disableTypography className={classes.listItem}>
                  About Me
                </ListItemText>
              </ListItem>
              <ListItem
                button
                className={classes.button}
                onClick={() => {
                  props.setOpenMenu(false);
                  props.scrollIntoView('#education');
                }}
              >
                <ListItemText disableTypography className={classes.listItem}>
                  Résumé
                </ListItemText>
              </ListItem>
              {/* <ListItem
                button
                className={classes.button}
                onClick={() => {
                  props.setOpenMenu(false);
                  props.scrollIntoView('#projects');
                }}
              >
                <ListItemText disableTypography className={classes.listItem}>
                  Projects
                </ListItemText>
              </ListItem> */}
              <ListItem
                button
                className={classes.button}
                onClick={() => {
                  props.setOpenMenu(false);
                  props.scrollIntoView('#muses');
                }}
              >
                <ListItemText disableTypography className={classes.listItem}>
                  Muses
                </ListItemText>
              </ListItem>
              <ListItem
                button
                className={classes.button}
                onClick={() => {
                  props.setOpenMenu(false);
                  props.scrollIntoView('#contact');
                }}
              >
                <ListItemText disableTypography className={classes.listItem}>
                  Contact Me
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </>
    </Modal>
  );
};

export default Menu;
