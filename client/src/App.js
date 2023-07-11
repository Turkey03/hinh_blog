import React, { useEffect, useState } from 'react';

import {Container, Typography, Grow, Grid, AppBar} from '@material-ui/core';
import { getPosts} from './actions/posts';
import { useDispatch } from 'react-redux';
import anh1 from './image/anh1.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import {useStyles} from './styles';
const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const  [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    dispatch(getPosts());
  },[currentId,dispatch])
  return (
    <Container maxWidth="lg">
      <AppBar className ={classes.appBar} position='static' color='inherit' >
        <Typography className ={classes.heading} variant='h2' align='center'>HinhBlog</Typography>
        <img className={classes.image} src={anh1} alt='Anh1' height='60'/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs ={12} sm={3}>
              <Form currentId ={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App