import React from 'react'
import './Form4.css';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const Loads = () => {
    return (
        <>
              <div className="onLoad">
            <div className="left">
                <KeyboardBackspaceIcon style={{ position:'relative' , top:'9px', fontSize:'30px'}}/>
                <span><u>Onbording</u></span>
            </div>
              
              <div className='mid'>
                  <h2>DEFINE Loads</h2>
              </div>
              <div className="right">
                    <button style={{backgroundColor:'#008bf6',borderRadius:'26px' ,color:'white' , width:"100px" ,height:'50px', fontSize:'15px', cursor:'pointer'}}>Add Tools</button>
              </div>

            </div>
        </>
    )
}

export default Loads;
