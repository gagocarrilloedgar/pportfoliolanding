import React from 'react';
import Layout from '../layouts/index';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles({
 
  gridContainer: {
      paddingLeft:'50px',
      paddingRight: '50px'
  },
  root: {
    minWidth: 275,
    height:100
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  });



const Collaborators = () => {
  const classes = useStyles();
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">Entidades colaboradoras</h1>
                </header>

                <div className="entry-body">
                  <p>Add your support information here.</p>
                </div>
                <p>p1=============================================================================================================================</p>
               
              </div>
              <p>p2=============================================================================================================================</p>
              <Grid container spacing={1} >
                  
                  <Grid item md={3}>

                  <Card className={classes.root} variant="outlined">
                    <CardActionArea>
                              <CardMedia
                              component="img"
                              alt=""
                              height="20"
                              image={require('../assets/img/colab_1.jpeg')}
                              title=""
                              />
                    </CardActionArea>
                  </Card>

                  </Grid>

                  <Grid item md={3}>
                  <Card className={classes.root} variant="outlined">
                    <CardActionArea>
                                <CardMedia
                                component="img"
                                alt=""
                                height="100"
                                image={require('../assets/img/colab_2.jpeg')}
                                title=""
                                />
                    </CardActionArea>
                  </Card>
                  </Grid>

                  <Grid item md={3}>
                  <Card className={classes.root} variant="outlined">
                     <CardActionArea>
                              <CardMedia
                              component="img"
                              alt=""
                              height="100"
                              image={require('../assets/img/colab_3.jpeg')}
                              title=""
                              />
                    </CardActionArea>
                  </Card>
                  </Grid>

                  <Grid item md={3}>
                  <Card className={classes.root} variant="outlined">
                     <CardActionArea>
                              <CardMedia
                              component="img"
                              alt=""
                              height="100"
                              image={require('../assets/img/colab_4.jpeg')}
                              title=""
                              />
                    </CardActionArea>
                  </Card>
                  </Grid>

                  <Grid item md={3}>
                  <Card className={classes.root} variant="outlined">
                     <CardActionArea>
                              <CardMedia
                              component="img"
                              alt=""
                              height="100"
                              image={require('../assets/img/colab_5.jpeg')}
                              title=""
                              />
                    </CardActionArea>
                  </Card>
                  </Grid>

                  <Grid item md={3}>
                  <Card className={classes.root} variant="outlined">
                      <CardActionArea>
                              <CardMedia
                              component="img"
                              alt=""
                              height="100"
                              image={require('../assets/img/colab_6.jpeg')}
                              title=""
                              />
                      </CardActionArea>
                  </Card>
                  </Grid>

                  <Grid item md={3}>
                  <Card className={classes.root} variant="outlined">
                      <CardActionArea>
                              <CardMedia
                              component="img"
                              alt=""
                              height="100"
                              image={require('../assets/img/colab_7.jpeg')}
                              title=""
                              />
                       </CardActionArea>
                  </Card>
                  </Grid>

                  <Grid item md={3}>
                  <Card className={classes.root} variant="outlined">
                      <CardActionArea>
                              <CardMedia
                              component="img"
                              alt=""
                              height="100"
                              image={require('../assets/img/colab_8.jpeg')}
                              title=""
                              />
                      </CardActionArea>
                  </Card>
                  </Grid>

                  <Grid item md={3}>
                  <Card className={classes.root} variant="outlined">
                     <CardActionArea>
                              <CardMedia
                              component="img"
                              alt=""
                              height="100"
                              image={require('../assets/img/colab_9.jpeg')}
                              title=""
                              />
                      </CardActionArea>
                  </Card>
                  </Grid>
                </Grid>
            </div>
            <p>p3=============================================================================================================================</p>
          </div>
          <p>p4=============================================================================================================================</p>
        </div>
      </article>
    </Layout>
  );
};

export default Collaborators;
