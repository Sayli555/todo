import  { useState } from 'react'
import {TodoInput} from './TodoInput'

import {TodoItems} from "./TodoItems"
import { nanoid } from 'nanoid';

function Todo() {
   const [todoList,setTodolist]=useState([]);
   function getData(todos){
     const playLoad={
       title:todos,
       status:false,
       id:nanoid(5),
     }
    
      setTodolist([...todoList,playLoad])
   }
   const handleChange=(id)=>{
    setTodolist([...todoList.map((e)=>(e.id===id ? {...e, status: !e.status}:e)),])
   }
 
  return (
    <div>
      <TodoInput getData={getData}/>
      {todoList.map((e)=>(
        <TodoItems handleChange={handleChange}  todosend={e}></TodoItems>
      ))}
    </div>
 
  )
}

export {Todo}
