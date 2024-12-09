import { useRecoilValue } from "recoil"
import { filteredTodoListState } from "../store/selectors/todoSelector"
import TodoItem from "./TodoItem"

function TodoContainer(){
    const filteredList= useRecoilValue(filteredTodoListState)

    return (
        <main>
            {filteredList.map((todoItem)=><TodoItem item={todoItem} key={todoItem.id}/>)}
        </main>
    )
}

export default TodoContainer