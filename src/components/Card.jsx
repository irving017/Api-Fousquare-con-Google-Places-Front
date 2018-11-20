import React from 'react';
import {Card,CardContent} from '@material-ui/core';
import Grid from '@material-ui/core/Grid'

const Cards = (props) => {
  return (
    <Grid item className='Card' style={{margin:10}}>
      <Card>
      <CardContent>
        <h4>{props.e.venue.name}</h4>
        <p style={{fontSize:'.8rem', fontWeight:'400'}}>{props.e.venue.location.address}</p>
      </CardContent>
      </Card>
    </Grid>
  );
}

export default Cards;
