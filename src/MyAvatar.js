import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import './gallant.jpg';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

function MyAvatar(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Galantryas" src="https://scontent.fsub1-1.fna.fbcdn.net/v/t1.0-1/p160x160/12360219_445323392330149_4654670678679332247_n.jpg?_nc_cat=103&_nc_ht=scontent.fsub1-1.fna&oh=50d8bf7e4f228efcb9c2e8aeae4724f6&oe=5D9F567C" className={classes.avatar} />
    </Grid>
  );
}

MyAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAvatar);