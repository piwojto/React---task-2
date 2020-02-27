import React from 'react';

export const Button = (props) =>{
    const {label, onButtonClick}=props
  
        return (
            <div style={{margin:"2rem"}}>
                <button onClick={onButtonClick}>{label}</button>
            </div> 
        ) 
  }
  
export  function onButtonClick () {
console.log("kliknięto przycisk");
}