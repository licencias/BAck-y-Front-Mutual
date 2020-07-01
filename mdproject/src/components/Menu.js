import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FormPaciente from './FormPaciente';
import AntecedentesMorbidos from './AntecedentesMorbidos';
import Anamnesis from './Anamnesis';
import Neuro from './Neuro';
import ExamenFisico from './ExamenFisico';
import Evaluaciones from './Evaluaciones';
import '../estilos/menu.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 2,
    width: '60%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Paciente" {...a11yProps(0)} />
          <Tab label="A. Morbidos" {...a11yProps(1)} />
          <Tab label="Anamnesis" {...a11yProps(2)} />
          <Tab label="Neurología" {...a11yProps(3)} />
          <Tab label="Examen Físico" {...a11yProps(4)} />
          <Tab label="Evaluaciones" {...a11yProps(5)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="contenedor-submenu">
          <FormPaciente />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <AntecedentesMorbidos />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="contenedor-2">
          <p>Anamnesis</p>
          <Anamnesis />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="contenedor-2">
          <p>Síntomas neurológicos</p>
          <Neuro />
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className="contenedor-2">
          <p>Examen físico</p>
          <ExamenFisico />
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <div className="contenedor-2">
          <p>Evaluaciones</p>
          <Evaluaciones />
        </div>
      </TabPanel>
      
    </div>
  );
}