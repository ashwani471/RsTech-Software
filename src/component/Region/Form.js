import React from "react";
import {
  Box,
  Grid,
  TextField,
  Input,
  InputAdornment,
  Typography,
  Button
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  inputField: {
    border: "5px solid white",
    backgroundColor: "#edf0f2",
    borderRadius: "12px",
    height: "60px",
  },
  icon: {
    paddingLeft: "10px",
    paddingRight: "20px",
  },
  maincontainer: {
    border: "1px solid gray",
    borderRadius: "10px",
    padding: "5px",
  },
  testing:{
     height: '60%',
     width: "60vw",
    //  border: '2px solid black'
    backgroundColor: ''
  },
  btn:{
    display: "flex",
    justifyContent:"flex-end",
    padding:'16px'
  }
});

function Form({ formdata, formhandlechange }) {
  const classes = useStyles();
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    formhandlechange(name, value);
  };

  return (
      <div className={classes.testing}>
      <h3 style={{marginLeft:'58%'}}>Add Region Here</h3>
    <Grid container style={{justifyContent:'flex-end'}}>
      <Grid item >
      <div>
        <Grid container>
          <Grid item xs={12} className="padding">
            <Typography>First Name</Typography>
          </Grid>
          <Grid item xs={12}>
            <Input
              className={classes.inputField}
              id="input-with-icon-adornment"
              name="first_name"
              placeholder="Tom"
              fullWidth="true"
              disableUnderline={true}
              startAdornment={
                <InputAdornment position="start">
                  <div className={classes.icon}>
                    <PersonIcon />
                  </div>
                </InputAdornment>
              }
            //   value={formdata.first_name}
              onChange={handlechange}
            />
          </Grid>
       
          </Grid>
          </div>
          {/* head name */}
          <div>
          <Grid container>
          <Grid item xs={12} className="padding">
            <Typography>First Name</Typography>
          </Grid>
          <Grid item xs={12}>
            <Input
              className={classes.inputField}
              id="input-with-icon-adornment"
              name="first_name"
              placeholder="Tom"
              fullWidth="true"
              disableUnderline={true}
              startAdornment={
                <InputAdornment position="start">
                  <div className={classes.icon}>
                    <PersonIcon />
                  </div>
                </InputAdornment>
              }
            //   value={formdata.first_name}
              onChange={handlechange}
            />
          </Grid>
       
          </Grid>
          </div>
          {/* Email */}
          <div>
          <Grid container>
          <Grid item xs={12} className="padding">
            <Typography>First Name</Typography>
          </Grid>
          <Grid item xs={12}>
            <Input
              className={classes.inputField}
              id="input-with-icon-adornment"
              name="first_name"
              placeholder="Tom"
              fullWidth="true"
              disableUnderline={true}
              startAdornment={
                <InputAdornment position="start">
                  <div className={classes.icon}>
                    <EmailIcon />
                  </div>
                </InputAdornment>
              }
            //   value={formdata.first_name}
              onChange={handlechange}
            />
          </Grid>
       
          </Grid>
          </div>
          {/* phone number */}
          <div>
          <Grid container>
          <Grid item xs={12} className="padding">
            <Typography>First Name</Typography>
          </Grid>
          <Grid item xs={12}>
            <Input
              className={classes.inputField}
              id="input-with-icon-adornment"
              name="first_name"
              placeholder="Tom"
              fullWidth="true"
              disableUnderline={true}
              startAdornment={
                <InputAdornment position="start">
                  <div className={classes.icon}>
                    <PhoneIcon />
                  </div>
                </InputAdornment>
              }
            //   value={formdata.first_name}
              onChange={handlechange}
            />
          </Grid>
       
          </Grid>
          </div>
          
         <div className={classes.btn}>
         <div className="innerBtn">
          <Button variant="outlined" color="primary" href="#outlined-buttons" style={{marginRight:"10px"}}>
           CANCEL
          </Button>
          </div>
          <div>
         <Button  className='innerBtn'
          variant="outlined" color="primary" href="#outlined-buttons">
           ADD
         </Button>
         </div>
         </div>
         
        </Grid>
      </Grid>
    
    </div>
  );
}

export default Form;