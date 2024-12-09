import { useRecoilState } from "recoil"
import { todoListState } from "../store/atoms/todoAtom"
import { Todo } from "../types"
import { useState } from "react"

type myComponentProps={
    item:Todo
    handleModal:(id:number)=>void
}

function TodoItem({item,handleModal}:myComponentProps){
    const [todoList,setTodoList]=useRecoilState(todoListState)


    const handleChange=()=>{
        const newitem={...item,isComplete:!item.isComplete}
        const newarr=[...todoList.slice(0,item.id),newitem,...todoList.slice(item.id+1)]
        setTodoList(newarr)
    }

    return (
        <div>
            <input type="checkbox" checked={item.isComplete} onChange={handleChange}/>
            <p>{item.item}</p>
            <button onClick={()=>handleModal(item.id)} aria-label="delete button">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3" clipPath="url(#clip0_108_146)">
                        <path d="M7.99999 25.3333C7.99999 26.8 9.19999 28 10.6667 28H21.3333C22.8 28 24 26.8 24 25.3333V9.33333H7.99999V25.3333ZM10.6667 12H21.3333V25.3333H10.6667V12ZM20.6667 5.33333L19.3333 4H12.6667L11.3333 5.33333H6.66666V8H25.3333V5.33333H20.6667Z" fill="#B30B04"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_108_146">
                        <rect width="32" height="32" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
    )
}

export default TodoItem