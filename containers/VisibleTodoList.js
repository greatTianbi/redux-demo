import { connect } from "react-redux"
import { toggleTodo } from "../actions"
import TodoList from "../components/TodoList"

const getVisibleTodos = (todos, filter) =>{//过滤器，判断点击某个显示状态
      /**
       * 算出todos
       * */
      switch(filter){
            case "SHOW_ALL":
                  return todos
            case "SHOW_COMPLETED":
                  return todos.filter(t => t.completed)
            case "SHOW_ACTIVE":
                  return todos.filter(t => !t.completed)
      }
}
const mapStateToProps = (state) =>{
      /**
       * 代码中，mapStateToProps是一个函数，它接受state作为参数，返回一个对象。
       * 这个对象有一个todos属性，代表 UI 组件的同名参数，
       * 后面的getVisibleTodos也是一个函数，可以从state算出 todos 的值。
      * */
      return {//返回todos作为TodoList的props
            todos: getVisibleTodos(state.todos, state.visibilityFilter)
      }
}

const mapDispatchToProps = (dispatch) =>{
      return {
            onTodoClick: (id) =>{
                  /**
                   * dispatch为传入的分发器，将对用户行为直接进行分发
                   * 分发到定义的action上
                   * */
                  dispatch(toggleTodo(id))
            }
      }
}

/**
 * 通过connect将mapStateToProps和mapDispatchToProps进行组合后传入TodoList
 * */
const VisibleTodoList = connect(
      mapStateToProps,
      mapDispatchToProps
)(TodoList)

export default VisibleTodoList
