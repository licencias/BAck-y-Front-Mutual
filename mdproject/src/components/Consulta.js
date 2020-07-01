import React, {Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import '../estilos/radio.css';
import '../estilos/logo.css';


const Consulta = () =>{

    return (
        <Fragment>
            <TextField
                id="outlined-full-width"
                label="Descripción"
                style={{ margin: 1, width: 850, left:20}}
                placeholder=""
                helperText=""
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
             />
              <div className="ib-1 row">
                <InputLabel  id="label">Buscar</InputLabel>
                    <Select style={{ width: 200,height:50,left:40}} labelId="label" id="select" value="">
                    <MenuItem value="10">Lorem</MenuItem>
                    <MenuItem value="20">Ipsum</MenuItem>
                    </Select>
                    <p></p>
                    <Divider />
                    <Typography>Identificación y descripción del segmento afectado </Typography>
                    
                    <Select style={{ width: 400,height:50,left:40}} labelId="label" id="select" value="1">
                    <MenuItem value="1">Codo</MenuItem>
                    <MenuItem value="2">Hombro</MenuItem>
                    <MenuItem value="3">Antebrazo</MenuItem>
                    <MenuItem value="4">Mano</MenuItem>
                    <MenuItem value="5">Muñeca</MenuItem>
                    <MenuItem value="6">Otro segmento</MenuItem>
                    </Select>



                    <p className="ubicacion-2 recurso">Tiene mecanismos traumáticos
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
            </div>
            
        </Fragment>
    )
}

export default Consulta;