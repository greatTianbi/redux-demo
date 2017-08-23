import React from "react"
import Todo from "./Todo"

const TodoList = ({todos, onTodoClick}) => {
     return (
           <ul>
                 {
                       todos.map(item =>{
                             return (
                                   <Todo
                                         key={item.id}
                                         {...item}
                                         onClick={() =>onTodoClick(item.id)}
                                   />
                             )

                       })
                 }
           </ul>
     )
}

export default TodoList
