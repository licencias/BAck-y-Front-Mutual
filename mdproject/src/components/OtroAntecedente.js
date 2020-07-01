import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import '../estilos/formato.css'

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
        <TextField id="outlined-basic" label="Nombre de la empresa" variant="outlined" />
        <TextField id="outlined-basic" label="Dirección de la empresa" variant="outlined" />
        <p className="calendar"><Typography className={classes.heading}>Fecha entrada</Typography></p>
        <input className="calendar" type="date" placeholder="fecha"></input>
        <p className="calendar-2">Fecha salida</p>
        <input className="calendar-2" type="date" placeholder="fecha"></input>
      </div>
      <div>
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
      </div>
      
    </form>
  );
}