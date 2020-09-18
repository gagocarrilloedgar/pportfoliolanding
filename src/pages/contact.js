import React from 'react';
import Layout from '../layouts/index';
import { makeStyles } from '@material-ui/core/styles';
import { Grid , Card , CardContent , Typography , Button , CardActions, Icon} from '@material-ui/core';
import { Visibility , TrendingUpIcon , PeopleIcon , ThumbUpIcon , LocalLibraryIcon , EventAvailable } from '@material-ui/icons';
import { CardHeader , IconButton } from 'material-ui';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
 
  gridContainer: {
      paddingLeft:'50px',
      paddingRight: '50px'
  },
  root: {
    minWidth: 275,
    height : 300
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

const ContactPage = () => {

  const classes = useStyles();
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="container">
              
                <header className="entry-header">
                  <h1 className="entry-title">Contacto</h1>
                </header>

                
                  
                  <Grid container spacing="4">
                    <Grid item sx={12} md={6}>
                    <Card className={classes.root} variant="outlined">
                      <CardActionArea>
                        <CardContent>
                        
                          <Typography variant="h5" component="h2">
                            E-mail:
                          </Typography>

                          <Typography variant="body2" component="p">
                          hello@pportfol.io
                          </Typography>

                          <Typography variant="h5" component="h2">
                            Teléfono:
                          </Typography>

                          <Typography variant="body2" component="p">
                          +34 693 43 06 54
                          </Typography>

                          <Typography variant="body2" component="p">
                          +34 616 15 91 49
                          </Typography>

                          <Typography variant="body2" component="p">
                          +34 638 09 69 85
                          </Typography>


                        </CardContent>
                      </CardActionArea>
                    </Card>
                    </Grid>


                    <Grid item sx={12} md={6}>
                    <Card className={classes.root} variant="outlined">
                      <CardActionArea>
                      <Typography variant="h5" component="h2">
                          Dirección:
                        </Typography>
                      <CardMedia 
                        component="iframe"
                        height="200"
                        src="https://maps.google.com/maps?q=Rambla%20de%20Sant%20Nebridi%2C%2022&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        title="Contemplative Reptile"
                      />
                      
                      </CardActionArea>

                      

                      <Typography variant="body2" component="p">
                      Rambla de Sant Nebridi, 22
                      </Typography>

                      <Typography variant="body2" component="p">
                      Terrassa(08222), Barcelona
                      </Typography>
                    
                    </Card>

                    </Grid>
                  </Grid>

               
              
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ContactPage;
