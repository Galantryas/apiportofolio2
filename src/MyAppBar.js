import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import SvgIcon from '@material-ui/core/SvgIcon';
import Avatar from './MyAvatar';
import { relative } from 'path';
import './App.css';


const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: blue[800],
    },
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  }, 
  smallIcon: {
    width: 10,
    height: 10,
  }
});

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function MyAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Link to="/home"><HomeIcon className={classes.iconHover} color="action"/></Link>
          <Link style={{paddingLeft: 13, textDecoration: 'none', color: '#000000'}} to="/profile">
            <Button className={classes.button}>
               Profile
            </Button>
          </Link>&nbsp;&nbsp;
          <Link style={{paddingLeft: 13, textDecoration: 'none', color: '#000000'}} to="/portofolio">
           <Button  className={classes.button}>
             Portofolio
            </Button>
          </Link>&nbsp;&nbsp;
          <Link style={{paddingLeft: 13, textDecoration: 'none', color: '#000000'}} to="/kontak">
            <Button  className={classes.button}>
              Contact
            </Button>
          </Link>&nbsp;&nbsp;
          <div class="right">
            <Avatar className={classes.rightAvatar}/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

MyAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAppBar);
