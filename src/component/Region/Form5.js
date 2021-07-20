import React from 'react'
import Header from '..//..//Forms/header';
import './Form5.css';
import {TextField} from '@material-ui/core';

const Form5 = () => {
    return (
        <>
          <Header />
          <div id='orderList'>
          <ol start='1' id='orderList'>
              <li style={{color:'blue'}}>WareHouse Details <div style={{height:'4px',width:'200px',backgroundColor:'blue'}}></div></li>
              <li style={{color:'blue'}}>WareHouse Details <div style={{height:'4px',width:'200px',backgroundColor:'blue'}}></div></li>
              <li style={{color:'blue'}}>WareHouse Details <div style={{height:'4px',width:'200px',backgroundColor:'blue'}}></div></li>
              <li style={{color:'blue'}}>WareHouse Details <div style={{height:'4px',width:'200px',backgroundColor:'blue'}}></div></li>

          </ol>  
          </div>
          <div id="TextField">
          <TextField id="filled-basic" label="Filled" variant="filled" style={{width:'500px'}}/>
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="filled-basic" label="Filled" variant="filled" />

         </div>
        </>
    )
}

export default Form5;
