import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

class MainApp extends Component {
  render()
  {
    return (
      <Grid container spacing={2}>
        <Grid item>
          Cart
        </Grid>
        <Grid item>
          <Link to="/">
            Go To MainApp
          </Link>
        </Grid>
      </Grid>
    )
  }
}

export default MainApp