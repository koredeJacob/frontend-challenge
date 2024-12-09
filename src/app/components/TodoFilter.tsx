import { useRecoilState } from "recoil"
import { todoListFilterState } from "../store/atoms/todoAtom"

function TodoFilter(){
    //filter the todo list
    const [filter, setFilter]= useRecoilState(todoListFilterState)

    const updateFilter=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setFilter(e.target.value)
    }

    return (
        <select value={filter} onChange={updateFilter}>
            <option value='Show All'>All</option>
            <option value='Show Completed'>Completed</option>
            <option value='Show Uncompleted'>Uncompleted</option>
        </select>
    )

}

export default TodoFilter