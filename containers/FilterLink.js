import { connect } from "react-redux"
import Link from "../components/Link"
import { setVisibility } from "../actions"

//第二个参数表示组件自身的props
/**
 * mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
 * */
const mapStateToProps = (state, ownProps) =>{
      return {
            active: ownProps.filter === state.visibilityFilter
      }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
      return {
            onClick: ()=>{
                  dispatch(setVisibility(ownProps.filter))
            }
      }
}


/**
 * React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来。
 * connect方法接受两个参数：mapStateToProps和mapDispatchToProps。它们定义了 UI 组件的业务逻辑。
 * 前者负责输入逻辑，即将state映射到 UI 组件的参数（props），
 * 后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
 * */
const FilterLink = connect(
      mapStateToProps,
      mapDispatchToProps
)(Link)

export default FilterLink