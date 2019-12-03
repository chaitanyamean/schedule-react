import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function AlertDialog(props) {
  // console.log('Add schedule',props);
  
  const [open, setOpen] = useState(props.show);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [shifts, setShifts] = useState('');
  const [linesAssociated, setLinesAssociated] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  let resData = {
    name: '',
    description: '',
    shifts: null,
    linesAssociated: ''
  }

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(name);
  console.log(description);
resData.name = name;
resData.description = description;
resData.shifts = shifts;
resData.linesAssociated = linesAssociated;


  props.getScheduleCallBack(resData);
}
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Add Schedule"}</DialogTitle>
        <DialogContent>
          <div>
        <TextField
          id="standard-full-width"
          label="Name"
          style={{ margin: 8 }}
          placeholder="Please enter name"
          fullWidth
          margin="normal"
          required
          value={name}
          onChange={ event => setName(event.target.value) }
          />
           <TextField
          id="standard-full-width"
          label="Description"
          style={{ margin: 8 }}
          placeholder="Please enter description"
          fullWidth
          margin="normal"
          required
          value={description}
          onChange={ event => setDescription(event.target.value) }
          />
           <TextField
          id="standard-full-width"
          label="No of shifts"
          style={{ margin: 8 }}
          placeholder="Please enter no of shifts"
          fullWidth
          margin="normal"
          required
          value={shifts}
          onChange={ event => setShifts(event.target.value) }
          />
           <TextField
          id="standard-full-width"
          label="Lines associated"
          style={{ margin: 8 }}
          placeholder="Please enter lines associated"
          fullWidth
          margin="normal"
          required
          value={linesAssociated}
          onChange={ event => setLinesAssociated(event.target.value) }
          />
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}