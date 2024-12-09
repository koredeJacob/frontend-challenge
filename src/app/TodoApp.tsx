import AddTodo from "./components/AddTodo"
import TodoContainer from "./components/TodoContainer"
import TodoFilter from "./components/TodoFilter"

function TodoApp(){
    return(
        <>
            <AddTodo/>
            <TodoFilter/>
            <TodoContainer/>
        </>
    )
}

export default TodoApp