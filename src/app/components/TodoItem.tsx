import { useRecoilState } from "recoil"
import { todoListState } from "../store/atoms/todoAtom"
import { Todo } from "../types"
import { log } from "console"

type myComponentProps={
    item:Todo
}

function TodoItem({item}:myComponentProps){
    const [todoList,setTodoList]=useRecoilState(todoListState)

    const handleChange=()=>{
        const newitem={...item,isComplete:!item.isComplete}
        const newarr=[...todoList.slice(0,item.id),newitem,...todoList.slice(item.id+1)]
        setTodoList(newarr)
    }

    console.log(todoList)
    return (
        <div>
            <input type="checkbox" checked={item.isComplete} onChange={handleChange}/>
            <p>{item.item}</p>
            <button></button>
        </div>
    )
}

export default TodoItem