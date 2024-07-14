import './App.css'
import {TodoTable} from './components/TodoTable.tsx'
import { useState } from 'react'
import {NewTodoForm} from './components/NewTodoForm.tsx'
export const App=() =>{

  const[showAddTodoForm,setShowAddTodoForm]=useState(false);

  const[todos,setTodos]= useState ([
    {rowNumber:1,rowDescription:'Feed puppy',rowAssigned:'User One'},
    {rowNumber:2,rowDescription:'Water plants',rowAssigned:'User Two'},
    {rowNumber:3,rowDescription:'Make dinner',rowAssigned:'User One'},
    {rowNumber:4,rowDescription:'Clean room',rowAssigned:'User One'},
  ]
)

  const addTodo = (description:string,assigned:string)=>{
    let rowNumber=0;
    if(todos.length >0){
      rowNumber=todos[todos.length-1].rowNumber +1;
    }else{
      rowNumber=1;
    }
      const newTodo={
        rowNumber:rowNumber,
        rowDescription:description,
        rowAssigned:assigned
      };
      setTodos([...todos,newTodo])
    
  }

  const deleteTodo = (deleteTodoRowNumber:number) => {
      setTodos(todos=>todos.filter(todo=>todo.rowNumber !== deleteTodoRowNumber))
      }
  
  return (
    
      <div className='mt-5 container'>
        <div className='card'>
          <div className='card-header'>
            Your Todo's
          </div>
          <div className='card-body' >
            <TodoTable todos={todos} deleteTodo={deleteTodo}/>
            <button className='btn btn-primary' onClick={()=>setShowAddTodoForm(!showAddTodoForm)}>
                {showAddTodoForm ? 'Close Todo' : 'New Todo'  }
            </button>
            {showAddTodoForm && <NewTodoForm addTodo={addTodo}/>}
            
          </div>
        </div>
      </div>
  )
}
