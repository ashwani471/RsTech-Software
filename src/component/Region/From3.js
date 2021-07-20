import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {TextField } from '@material-ui/core/';

 const Form3=()=> {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add"}</DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
        <TextField id="filled-basic" label="" variant="outlined" placeholder="Warehouse" style={{ width:'450px' ,padding:'20px' }}/>
        <TextField id="filled-basic" label="" variant="outlined" placeholder="DC" style={{ width:'450px' ,padding:'20px'}}/>
        <TextField id="filled-basic" label="" variant="outlined" placeholder="Plant/Yard" style={{ width:'450px' ,padding:'20px'}} />
        <DialogActions>
        <Button variant="outlined" color="primary">
          Cancel
         </Button>
         <Button variant="outlined" color="primary">outlined
         </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Form3;