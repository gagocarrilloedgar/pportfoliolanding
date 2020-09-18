import React from 'react';
import Layout from '../layouts/index';
import { makeStyles } from '@material-ui/core/styles';
import { Grid , Card , CardContent , Typography , Button , CardActions, Icon } from '@material-ui/core';
import { Visibility , TrendingUpIcon , PeopleIcon , ThumbUpIcon , LocalLibraryIcon , EventAvailable } from '@material-ui/icons';
import { CardHeader, IconButton } from 'material-ui';

const useStyles = makeStyles({
 
  gridContainer: {
      paddingLeft:'50px',
      paddingRight: '50px'
  },
  root: {
    minWidth: 275,
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

const AboutPage = () => {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">¿Qué es Pportfolio?</h1>
                </header>
                <p> Pportfolio es una plataforma comprometida que quiere aportar su granito de arena logrando integrar a los más desfavorecidos en el mundo laboral a través de nuestras ayudas.</p>

                <Grid container spacing={4} >
                  <Grid item sx={12} md={6}>

                  <Card className={classes.root} variant="outlined">
                    <CardContent>
                     
                      <Typography variant="h5" component="h2">
                        Visión
                      </Typography>

                      <Typography variant="body2" component="p">
                      Haz match con el trabajo de tus sueños
                       
                      </Typography>
                    </CardContent>
                  </Card>

                  </Grid>

                  <Grid item sx={12} md={6}>
                  <Card className={classes.root} variant="outlined">
                    <CardContent>
                      
                      <Typography variant="h5" component="h2">
                        Progreso
                      </Typography>
                      <Typography variant="body2" component="p">
                      Revisa y mejora tus habilidades profesionales
                      
                      </Typography>
                    </CardContent>
                  </Card>
                  </Grid>

                  <Grid item sx={12} md={6}>
                  <Card className={classes.root} variant="outlined">
                    <CardContent>
                      
                      <Typography variant="h5" component="h2">
                      Guía
                      </Typography>
                      <Typography variant="body2" component="p">
                      Encuentra mentores y colaboradores
                       
                      </Typography>
                    </CardContent>
                  </Card>
                  </Grid>

                  <Grid item sx={12} md={6}>
                  <Card className={classes.root} variant="outlined">
                    <CardContent>
                      
                      <Typography variant="h5" component="h2">
                        Actualízate
                      </Typography>
                      <Typography variant="body2" component="p">
                      Descubre las habilidades que piden las empresas top
                      
                      </Typography>
                    </CardContent>
                  </Card>
                  </Grid>

                  <Grid item sx={12} md={6}>
                  <Card className={classes.root} variant="outlined">
                    <CardContent>
                      
                      <Typography variant="h5" component="h2">
                        Prosperidad
                      </Typography>
                      <Typography variant="body2" component="p">
                      Mejora, conecta y ayuda a generar cambio
                       
                      </Typography>
                    </CardContent>
                  </Card>
                  </Grid>

                  <Grid item sx={12} md={6}>
                  <Card className={classes.root} variant="outlined">
                    <CardContent>
                      
                      <Typography variant="h5" component="h2">
                        Demuestra
                      </Typography>
                      <Typography variant="body2" component="p">
                      Encuentra proyectos, eventos y prácticas
                        
                      </Typography>
                    </CardContent>
                  </Card>
                  </Grid>
                </Grid>


              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default AboutPage;
