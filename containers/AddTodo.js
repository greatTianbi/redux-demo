import React from "react"
import { connect } from "react-redux"
import { addTodo } from "../actions"

let AddTodo = ({ dispatch }) =>{//react中render的对象
      let getInput;//定义变量，和ref进行绑定，通过getInput.value即可获得input值

      return (
            <div>
                  <form
                        onSubmit={
                              e=>{
                                    e.preventDefault();
                                    if(!getInput.value.trim()){ return }
                                    dispatch(addTodo(getInput.value))//通过input值传入
                                    getInput.value = ""//提交后输入框置空
                              }
                        }
                  >
                        <input ref={node => {getInput=node}} />
                        <button type="submit">添加</button>
                  </form>
            </div>
      )
}

AddTodo = connect()(AddTodo)

export default AddTodo
