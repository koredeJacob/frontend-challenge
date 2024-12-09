import { useState } from "react"
import AddTodo from "./components/AddTodo"
import TodoContainer from "./components/TodoContainer"
import TodoFilter from "./components/TodoFilter"
import { useRecoilValue } from "recoil"
import { todoListState } from "./store/atoms/todoAtom"

function TodoApp(){
    const [adding,setAdding]=useState(-1)
    const todoList=useRecoilValue(todoListState)

    const handleAdding=()=>{
            setAdding(todoList.length?todoList[todoList.length-1].id+1:0)
            setTimeout(()=>setAdding(-1),500)
        }

    return(
        <>  
            <section className="flex flex-col gap-2 sm:flex-row sm:gap-0 content-center justify-between">
                <AddTodo handleAdding={handleAdding}/>
                <TodoFilter/>
            </section>
            <section >
                <TodoContainer newitem={adding}/>
            </section>
        </>
    )
}

export default TodoApp