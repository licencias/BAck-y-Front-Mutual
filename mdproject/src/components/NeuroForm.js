import React, {Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import '../estilos/radio.css';
import '../estilos/formato.css';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function StateTextFields() {
  const classes = useStyles();
  const [name, setName] = React.useState('Cat in the Hat');
  const handleChange = event => {
    setName(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField id="outlined-basic" label="Motivo de Consulta" variant="outlined" style={{ margin: 1, width: 700 }}/>
        <p className="ubicacion-2">¿Presenta síntomas neurológicos?
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
            <div>
            <InputLabel  id="label">Buscar</InputLabel>
                <Select style={{ margin: -20, width: 200,left:20}} labelId="label" id="select" value="">
                <MenuItem value="10">Lorem</MenuItem>
                <MenuItem value="20">Ipsum</MenuItem>
                </Select>
            </div>
            <div>
            <TextField
          id="outlined-full-width"
          label="Descripción"
          style={{ margin: 1, width: 600,top:-50, left:220}}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </div>
      </p>
        <hr />
        <div className="position">
        <Typography>Identificación y descripción del segmento afectado </Typography>
                    
                    <Select style={{ width: 400,height:50,left:40}} labelId="label" id="select" value="1">
                    <MenuItem value="1">Codo</MenuItem>
                    <MenuItem value="2">Hombro</MenuItem>
                    <MenuItem value="3">Antebrazo</MenuItem>
                    <MenuItem value="4">Mano</MenuItem>
                    <MenuItem value="5">Muñeca</MenuItem>
                    <MenuItem value="6">Otro segmento</MenuItem>
                    </Select>



                    <p className="ubicacion-2 recurso">Otros síntomas
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
            <div>
            <TextField
          id="outlined-full-width"
          label="Descripción"
          style={{ margin: 1, width: 600,top:-50, left:220}}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </div>
      </p>
      <hr />

      <Typography>Identificación y descripción del segmento afectado </Typography>
                    
                    <Select style={{ margin:4,width: 300,height:50,left:40}} labelId="label" id="select" value="1">
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    </Select>
      </div>
      </div>

    </form>
  );
}