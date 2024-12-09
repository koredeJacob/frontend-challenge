import AddTodo from "./components/AddTodo"
import TodoContainer from "./components/TodoContainer"
import TodoFilter from "./components/TodoFilter"

function TodoApp(){
    return(
        <>  
            <section className="flex flex-col gap-2 sm:flex-row sm:gap-0 content-center justify-between">
                <AddTodo/>
                <TodoFilter/>
            </section>
            <section >
                <TodoContainer/>
            </section>
        </>
    )
}

export default TodoApp