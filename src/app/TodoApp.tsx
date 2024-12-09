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
            <section className="relative h-[250px] lg:h-[300px] md:scrollbar-hide bg-main p-2.5 rounded-xl overflow-y-scroll">
                <TodoContainer/>
            </section>
        </>
    )
}

export default TodoApp