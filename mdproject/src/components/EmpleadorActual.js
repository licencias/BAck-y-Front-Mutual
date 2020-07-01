import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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
        <TextField id="outlined-basic" label="Nombre de empresa ó empleador" variant="outlined" />
        <TextField id="outlined-basic" label="Dirección empresa ó empleador" variant="outlined" />
        <TextField id="outlined-basic" label="Rut Empresa" variant="outlined" />
        <TextField id="outlined-basic" label="Teléfono de contacto" variant="outlined" />
      </div>
      <div>
        <TextField id="outlined-basic" label="Título del cargo" variant="outlined" />
        <TextField id="outlined-basic" label="Nombre de contacto" variant="outlined" />
        <TextField id="outlined-basic" label="Antigüedad laboral" variant="outlined" />
        <TextField id="outlined-basic" label="Descripción del cargo" variant="outlined" />
      </div>
    </form>
  );
}