import 'date-fns';
import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import '../estilos/radio.css';
import '../estilos/formato.css';

export default function MaterialUIPickers() {

  return (
        <Fragment>
            <div >
            <TextField
                style={{ width:300}}
                id="date"
                label="Tiempo de Evolución"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                shrink: true,
                }}
            />
                <Select style={{ width:200, top:16,left:200}} labelId="label" id="select" value="1">
                <MenuItem value="10">Lorem</MenuItem>
                <MenuItem value="20">Ipsum</MenuItem>
                </Select>

                <p >Mecanismo de lesión
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
                    style={{ margin: 1, width: 800,top:-50 }}
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

                <div className="mask">

                </div>
                <div>
                <Typography id="discrete-slider-always" gutterBottom>
                    Escala Eva
                </Typography>
                <Slider
                    defaultValue={50}
                    style={{ width: 650 }}
                    aria-labelledby="discrete-slider-always"
                    step={10}
                    valueLabelDisplay="on"
                    ></Slider>
                </div>

                <p className="ubicacion-2">Irradiación
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

      <p className="ubicacion-2">Factores agravantes
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

      <p className="ubicacion-2">Factores atenuantes
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

      <p className="ubicacion-2">Impotencia funcional
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

      <p className="ubicacion-2">Sistema neurológicos
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

      <p className="ubicacion-2">Otros síntomas
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

            </div>
            
        </Fragment>
     

  
  );
}