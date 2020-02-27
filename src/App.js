import React from 'react';
import Input from './Input'
import {Button, onButtonClick} from './Button'
import ToDoList from './ToDoList'


function HomePage() {
  return (
        <div className='app'>       
          <Input/>
          <Button label='Wciśnij mnie' onButtonClick={onButtonClick}/>
          <ToDoList/>
        </div>
  );
}

export default HomePage;
