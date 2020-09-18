import React from 'react';
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


import Layout from '../layouts/index';
import { CenterFocusStrong } from '@material-ui/icons';




const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        height: 600
        
    },
    gridContainer: {
        paddingLeft:'50px',
        paddingRight: '50px'
    }
    });

const TeamPage = () => {

  const classes = useStyles();
  
  return (
    <Layout>
      <article className="entry">
    
        <div className="container">
       
          <div className="entry-inner">
        
           
          
              <div className="container">
             
                <header className="entry-header">
                  <h1 className="entry-title">Conoce al equipo:</h1>
                </header>
               
                <div className="entry-body">
                  <p>Los miembros del equipo Pportfolio trabajan a tiempo completo en el desarrollo de software y la expansión de la bolsa de empresas y candidatos</p>
                </div>
            
              
             

              <Grid container spacing={1} className={classes.gridContainer}>
                      <Grid item sx={12} md={4}>

                      <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt=""
                            height="100"
                            image={require('../assets/img/edgar_sqr.jpg')}
                            title=""
                            />
                            <CardContent>
                            <Typography align="center" gutterBottom variant="h5" component="h2">
                                Edgar Gago
                            </Typography>
                            <Typography align="center" variant="body2" color="textSecondary" component="p">
                                CEO 
                            </Typography>
                            <Typography variant="caption" color="textSecondary" component="p">
                            Edgar posee varios años de experiencia laboral en sectores de software y maquinaria industrial. Desde hace varios años participa en programas de emprendimiento y ha ganado varias Business Hackatons, pudiendo participar en programas de formación específica en desarrollo de Startups. Actualmente gestiona parte del programa Empren UPC Terrassa y colabora con una Startup para el desarrollo de un H2020.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                       </Card>
                      
                      </Grid>
                      <Grid item sx={12} md={4}>
                        
                        <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt=""
                            height="100"
                            image={require('../assets/img/guillem_srq.jpg')}
                            title=""
                            />
                            <CardContent>
                            <Typography align="center"gutterBottom variant="h5" component="h2">
                                Guillem Moreno
                            </Typography>
                            <Typography align="center" variant="body2" color="textSecondary" component="p">
                                CTO
                            </Typography>
                            <Typography variant="caption" color="textSecondary" component="p">
                            Guillem ha sido coordinador de estructuras y diseño de un proyecto estudiantil centrado en el diseño de Mars Rober. Tiene varios años de experiencia en diseño y creación de prototipos. Actualmente trabaja con ingeniero de ciberseguridad en la multinacional PWC.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                      
                      </Grid>
                      <Grid item sx={12} md={4}>
                      
                        <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt=""
                            height="100"
                            image={require('../assets/img/carlos_sqr.jpg')}
                            title=""
                            />
                            <CardContent>
                            <Typography align="center" gutterBottom variant="h5" component="h2">
                                Carlos Ibañez
                            </Typography>
                            <Typography align="center" variant="body2" color="textSecondary" component="p">
                                COO
                            </Typography>
                            <Typography variant="caption" color="textSecondary" component="p">
                            Carlos desarrolló su tesis sobre sistemas autónomos de posicionamiento uav utilizando sensores avanzados. Tiene varios años de experiencia con distintos lenguajes de programación: C++, C#, Python y Reactjs. Ha trabajado en el departamento de gestión de vueling  y en el departamento de investigación  de Inteligencia Artificial para UAV's de la universidad de Roma.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                     
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

export default TeamPage;