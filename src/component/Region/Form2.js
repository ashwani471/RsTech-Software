import React from "react";
import { Button } from "@material-ui/core/";

const Form2 = () => {
  return (
    <>
    <div style={{ width:'300px' ,height:'250px'}}>
      <p>Are you Sure ? the region gurugram will Be deleted.</p>
      <br />
      <div style={{float:'right', padding:"10px" , display:'flex'}}> 
      <div style={{paddingRight:'5px'}}>
      <Button variant="outlined" color="primary" >
        Cancel
      </Button>
      </div>
      <div>
      <Button variant="outlined" color="secondary">
        Delete
      </Button>
      </div>
      </div>
      </div>
    </>
  );
};

export default Form2;
