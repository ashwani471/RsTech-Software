import React, { useState } from "react";
import ReactDOM from 'react-dom';
// import Button from './Forms/button';
import Form6 from './Forms/form6';
import Form7 from './Forms/form7';
import Form8 from './Forms/form8';
import Header from './Forms/header';
import Form10  from './Forms/form10';
import Form from './component/Region/Form';
import Form2 from './component/Region/Form2';
import Form3 from './component/Region/From3';
import Form4 from './component/Region/Form4';
import Form5 from './component/Region/Form5';

const App=()=>{

  const[number,setNumber]=useState('');
  const[flag,setFlag]=useState(0);
 
  const InputEvent=(e)=>{
   setNumber(e.target.value);
 }

//  const handleChange=()=>{
//   //  console.log(n);
//    setNumber(flag+1);
//  }
 const onNext=()=>{
   setFlag(flag+1);
 }

  return(
    <>
{/*     
      {flag==0 &&(
      <Form6 
      number={number} 
      onNext={onNext}
      onChange={InputEvent}
      />
      )}

      {flag==1&&(
      <Form7 number={number}
        onNext={onNext}
      />)}
      
      {flag==2&&(
        <Form8 
          onNext={onNext}
        />)}
      {flag==3&&(
        <Form10
        onNext={onNext} />
      )}  */}
      {/* <Form /> 
       <Form2 />
        <Form3 />
        <Form4 />
       */}
       <Form5 />
    </>
  )
   
}

export default App;