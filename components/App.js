import React from "react"
import AddTodo from "../containers/AddTodo"
import VisibleTodoList from "../containers/VisibleTodoList"
import Footer from "./Footer"

/**
 * containers文件:如何工作(数据获取、状态更新)逻辑组件
 * components文件:如何显示(样式、布局)
 * */
const App = ()=>{
      return (
            <div>
                  <AddTodo />
                  <VisibleTodoList />
                  <Footer />
            </div>
      )
}

export default App