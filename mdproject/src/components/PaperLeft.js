import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../estilos/letras.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(44),
      height: theme.spacing(52.5), //46, máximo probado
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className="carta-1">
        <div className={classes.root}>  
            <Paper elevation={3}>
                <div className="carta-2">
                  <div>
                  <Typography variant="h6" component="h3">
                    <div className="titulo-1">
                      Información de consulta
                    </div>
                    <div className="texto-1">
                      <p>Fecha de evaluación: 29/01/2020</p>
                      <p>Numero de siniestro: 9123455</p>
                    </div>
                  </Typography>
                  </div>
                </div>
                <div className="carta-3">
                <div>
                  <Typography variant="h6" component="h3">
                    <div className="titulo-1">
                      Empleador | Empresa actual
                    </div>
                    <div className="texto-2">
                      <p>Nombre: lorem  ipsum</p>
                    </div>
                  </Typography>
                  </div>
                </div>
                <div className="carta-4">
                <div>
                  <Typography variant="h6" component="h3">
                    <div className="titulo-1">
                      Antecedentes del trabajador
                    </div>
                    <div className="texto-3">
                      <p>Nombre: Lorem ipsum</p>
                      <p>Rut: 11.111.111-1</p>
                    </div>
                  </Typography>
                  </div>
                </div>
                <div className="carta-5">
                <div>
                  <Typography variant="h6" component="h3">
                    <div className="titulo-1">
                      Médico evaluador
                    </div>
                    <div className="texto-4">
                      <p>Nombre: Lorem ipsum</p>
                      <p>Rut: 11.111.111-1</p>
                      <p>Especialidad Médica: Lorem</p>
                    </div>
                  </Typography>
                  </div>
                </div>
            </Paper>
        </div>
    </div>
  );
}