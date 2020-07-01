import React from 'react';
import TextField from '@material-ui/core/TextField'
import '../estilos/formato.css'

export default function FormControlLabelPosition() {
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
      <div className="asd">
    <TextField
          id="filled-multiline-static"
          label="Descripción"
          multiline
          rows="4"
          defaultValue="Detalle descripción"
          variant="outlined"
        />
    </div>
  );
}