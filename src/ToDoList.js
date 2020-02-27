import React, {Component} from 'react';
import axios from "axios";

const todoUrl = "http://195.181.210.249:3000/todo/";

class ToDoList extends Component {
    constructor(){
        super()
        this.state = {
            todos: [],
            stat:0,
            imBusy:true
    }
    }

       componentDidMount(){
       axios.get(todoUrl)
        .then((res) => {
          this.setState({
              todos:res.data,
              imBusy:false,
              stat:res.status
            });
          console.log(res.status)
            
        });
    }

    render(){
        const {imBusy, stat} = this.state
            if(imBusy) {
                return(<h4 style={{background:"yellow"}}>Pobieram dane ...</h4>
                )
                
            } else if(stat===200) {
 
                return ( 
            
                <div>

                    <ul>
                        {this.state.todos.map(todos=>              
                        <ToDoItem >
                            {todos.title}
                        </ToDoItem>)}
                    </ul>
                    </div>
                )
            }
    }
}

const ToDoItem = ({children})=>{
    return(
        
        <li>
            <h3>{children}</h3>
        </li>
    )
}


// 3. z podanego htmla wytworzyć aktywnie działające komponenty funkcyjne i stanowe
//const htmlTodoItem = (<li><h3>treść todo</h3></li>)
//const htmlTodoList = (<ul>{
    /* tutaj mają być wyrenderowane elementy TodoItem dla każdego todosa */
//}</ul>)

// ten komponent funkcyjny ma przyjmować props "title"
// const ToDoItem = ()=>{}

// ten komponent stanowy ma mieć stan "imBusy" oraz "todos"
// ten komponent ma mieć zamontowanego axiosa z getem po wszystkie todosy
// w trakcie gdy wykonywane jest zapytanie przez axiosa ma mieć pokazany "loading"
// jeśli zapytanie zostanie wykonane ze statusem 200 
// komponent ma wyświetlić listę todosów w komponentach TodoItem

// class ToDoList extends Component

export default ToDoList;