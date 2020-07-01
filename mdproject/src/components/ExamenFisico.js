import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AntecedentesTrabajador from './AntecedentesTrabajador';
import '../estilos/menu.css'
import EmpleadorActual from './EmpleadorActual'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <div className="berserker-1">
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header">
            <Typography className={classes.heading}>
              Inspección
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <div className="contenido-1">
                <AntecedentesTrabajador />
              </div>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>

      <div className="berserker-1">
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>
                Palpación
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <EmpleadorActual />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>

      <div className="berserker-1">
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>
                Movilización
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <EmpleadorActual />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>

      <div className="berserker-1">
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>
                Neurológico
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <EmpleadorActual />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>

      <div className="berserker-1">
        <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>
                Segmento Contralateral
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <EmpleadorActual />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>

    </div>
  );
}