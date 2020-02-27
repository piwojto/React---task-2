import React, {Component} from 'react';

class Input extends Component{
    constructor(){
        super()
        this.state = {
            inputValue:''
        }
    };

    onInputChange = (event) => {
         this.setState({inputValue:event.target.value});
         console.log(this.state);
     }
     render(){
           return (
           
            <div style={{margin:"2rem"}}>
             <input 
                onChange={this.onInputChange}
                placeholder='Wpisz tekst'/>
            </div> 
            
        )  
     }
}

export default Input;