import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

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
        <TextField id="outlined-basic" label="Nombre del trabajador" variant="filled"/>
        <TextField id="outlined-basic" label="Rut del trabajador" variant="filled" />
        <TextField id="outlined-basic" label="Edad del trabajador" variant="filled" type="number"/>
      </div>
      <div>
        <TextField id="outlined-basic" label="Dirección de domicilio" variant="filled" />
        <TextField id="outlined-basic" label="Teléfono" variant="filled" ></TextField>
        <TextField id="outlined-basic" label="Sexo del trabajador" variant="filled" placeholder="Masculino"/>
      </div>
    </form>
  );
}