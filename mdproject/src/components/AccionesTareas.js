import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Descripcion from './Descripcion';
import Typography from '@material-ui/core/Typography';
import '../estilos/formato.css';
import '../estilos/radio.css';
import TextField from '@material-ui/core/TextField';



const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);


function BoilingVerdict(props) {
  if (props.celsius >= 2) {
    return (
      <Fragment>
          <Descripcion />     
      </Fragment>
    )
  }
  return (
    <div />
  )
}

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }
  

  render() {
    const temperature = this.state.temperature;
    
    return (
    
      <Fragment>
        <div className="contenedor-am">
        
        <p className="ubicacion-2">Alternacion rotación de tareas
            <div className="ubicacion-0">
                <td className="ubicacion-4">
                    <div>
                    <p className="ubicacion-5">No</p>
                        <input type="radio" name="r1"  value="option1" required />
                        
                    </div>
                </td>
                <td>
                    <div className="ubicacion-1">
                        <p className="ubicacion-3">Si</p>
                        <input type="radio" name="r1" id="inlineRadio2" value="option2" required />
                        
                    </div>
                    
                </td>
            </div>
            <TextField
          id="outlined-full-width"
          label="Descripción"
          style={{ margin: 1, width: 800,top:-50}}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </p>

      <p className="ubicacion-2 recurso">Pausas Descanso
      <div className="ubicacion-0">
                <td className="ubicacion-4">
                    <div>
                    <p className="ubicacion-5">No</p>
                        <input type="radio" name="r2"  value="option1" required />
                        
                    </div>
                </td>
                <td>
                    <div className="ubicacion-1">
                        <p className="ubicacion-3">Si</p>
                        <input type="radio" name="r2" id="inlineRadio2" value="option2" required />
                        
                    </div>
                    
                </td>
            </div>
            <TextField
          id="outlined-full-width"
          label="Descripción"
          style={{ margin: 1, width: 800,top:-50}}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </p>

      <p className="ubicacion-2 recurso">Fuerza sostenida con extremidades
      <div className="ubicacion-0">
                <td className="ubicacion-4">
                    <div>
                    <p className="ubicacion-5">No</p>
                        <input type="radio" name="r3"  value="option1" required />
                        
                    </div>
                </td>
                <td>
                    <div className="ubicacion-1">
                        <p className="ubicacion-3">Si</p>
                        <input type="radio" name="r3" id="inlineRadio2" value="option2" required />
                        
                    </div>
                    
                </td>
            </div>
            <TextField
          id="outlined-full-width"
          label="Descripción"
          style={{ margin: 1, width: 800,top:-50}}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </p>

      <p className="ubicacion-2 recurso">Posición forzada mantenida
      <div className="ubicacion-0">
                <td className="ubicacion-4">
                    <div>
                    <p className="ubicacion-5">No</p>
                        <input type="radio" name="r4"  value="option1" required />
                        
                    </div>
                </td>
                <td>
                    <div className="ubicacion-1">
                        <p className="ubicacion-3">Si</p>
                        <input type="radio" name="r4" id="inlineRadio2" value="option2" required />
                        
                    </div>
                    
                </td>
            </div>
            <TextField
          id="outlined-full-width"
          label="Descripción"
          style={{ margin: 1, width: 800,top:-50}}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </p>

      <p className="ubicacion-2 recurso">Exposición a vibración de mano - brazo
      <div className="ubicacion-0">
                <td className="ubicacion-4">
                    <div>
                    <p className="ubicacion-5">No</p>
                        <input type="radio" name="r5"  value="option1" required />
                        
                    </div>
                </td>
                <td>
                    <div className="ubicacion-1">
                        <p className="ubicacion-3">Si</p>
                        <input type="radio" name="r5" id="inlineRadio2" value="option2" required />
                        
                    </div>
                    
                </td>
            </div>
            <TextField
          id="outlined-full-width"
          label="Descripción"
          style={{ margin: 1, width: 800,top:-50}}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </p>

      <p className="ubicacion-2 recurso">Remuneracíon por producción
      <div className="ubicacion-0">
                <td className="ubicacion-4">
                    <div>
                    <p className="ubicacion-5">No</p>
                        <input type="radio" name="r6"  value="option1" required />
                        
                    </div>
                </td>
                <td>
                    <div className="ubicacion-1">
                        <p className="ubicacion-3">Si</p>
                        <input type="radio" name="r6" id="inlineRadio2" value="option2" required />
                        
                    </div>
                    
                </td>
            </div>
            <TextField
          id="outlined-full-width"
          label="Descripción"
          style={{ margin: 1, width: 800,top:-50}}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </p>

      <p className="ubicacion-2 recurso">Movimientos repetitivos
      <div className="ubicacion-0">
                <td className="ubicacion-4">
                    <div>
                    <p className="ubicacion-5">No</p>
                        <input type="radio" name="r7"  value="option1" required />
                        
                    </div>
                </td>
                <td>
                    <div className="ubicacion-1">
                        <p className="ubicacion-3">Si</p>
                        <input type="radio" name="r7" id="inlineRadio2" value="option2" required />
                        
                    </div>
                    
                </td>
            </div>
            <TextField
          id="outlined-full-width"
          label="Descripción"
          style={{ margin: 1, width: 800,top:-50}}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </p>

      <p className="ubicacion-2 recurso">Uso de herramientas manuales
      <div className="ubicacion-0">
                <td className="ubicacion-4">
                    <div>
                    <p className="ubicacion-5">No</p>
                        <input type="radio" name="r7"  value="option1" required />
                        
                    </div>
                </td>
                <td>
                    <div className="ubicacion-1">
                        <p className="ubicacion-3">Si</p>
                        <input type="radio" name="r7" id="inlineRadio2" value="option2" required />
                        
                    </div>
                    
                </td>
            </div>
            <TextField
          id="outlined-full-width"
          label="Descripción"
          style={{ margin: 1, width: 800,top:-50}}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </p>
    </div>
        
      </Fragment>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
