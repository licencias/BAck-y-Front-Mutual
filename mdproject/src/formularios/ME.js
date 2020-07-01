import React, { Fragment } from 'react';
import NavBar from '../components/NavBar';
import Menu from '../components/Menu';
import CardLeft from '../components/PaperLeft';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../estilos/menu.css';
import '../estilos/letras.css';

function ME() {
  return (
    <Fragment>
      <NavBar />
      <div className="contenedor-me">
      <div className="title-1">
        <Typography variant="h4" gutterBottom>
          EVALUACION MÉDICA
          <Typography variant="h6" gutterBottom>
            <p className="subtitle-1">Calificación Patología músculo esquelético</p>
          </Typography>
        </Typography>
      </div>
      <div className="contenedor-general">
        <CardLeft />
        
        <div className="contenedor">
          <div className="fuente">

            <Button className="boton-a">
              <p className="primera-a">A</p>
              <p className="signo-mas">+</p>
            </Button>

            <Button className="boton-a">
              <p className="segunda-a">A</p>
            </Button>

            <Button className="boton-a">
              <p className="tercera-a">A</p>
              <p className="signo-menos">-</p>
            </Button>

          </div>
            <Menu />  
        </div>

        <div className="boton-cancelar">
          <Button variant="contained" color="secondary">
            Cancelar
          </Button>
        </div>

        <div className="boton-continuar">
          <Button variant="contained" color="primary">
            Continuar
          </Button>
        </div>
      </div>
      </div>
    </Fragment>
    
  )
}

export default ME;
