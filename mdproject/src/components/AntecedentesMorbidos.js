import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../estilos/radio.css';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="contenedor-am">
        
        <p className="ubicacion-2">¿Presenta patologías comunes?
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
          style={{ margin: 1, width: 700,top:-50, left:220}}
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

      <p className="ubicacion-2 recurso">Antecedentes Fibromialgía ó Sindrome dolor miofascial
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
          style={{ margin: 1, width: 700,top:-50, left:220}}
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

      <p className="ubicacion-2 recurso">Farmacos en uso
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
          style={{ margin: 1, width: 700,top:-50, left:220}}
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

      <p className="ubicacion-2 recurso">Antecedentes quirúrgicos
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
          style={{ margin: 1, width: 700,top:-50, left:220}}
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

      <p className="ubicacion-2 recurso">Antecedentes traumáticos
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
          style={{ margin: 1, width: 700,top:-50, left:220}}
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

      <p className="ubicacion-2 recurso">¿Posee alergias?
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
          style={{ margin: 1, width: 700,top:-50, left:220}}
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

      <p className="ubicacion-2 recurso">¿Presenta patologías laborales?
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
          style={{ margin: 1, width: 700,top:-50, left:220}}
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
  );
}