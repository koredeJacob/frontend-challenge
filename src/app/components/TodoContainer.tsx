import { useRecoilState, useRecoilValue, } from "recoil"
import { filteredTodoListState } from "../store/selectors/todoSelector"
import TodoItem from "./TodoItem"
import { useState } from "react"
import DeleteModal from "./DeleteModal"
import { todoListState } from "../store/atoms/todoAtom"

function TodoContainer(){
    const filteredList= useRecoilValue(filteredTodoListState)
    const [todoList, setTodoList]= useRecoilState(todoListState)
    const [modalOpen, setModalOpen]=useState(false)
    const [deleteId,setDeleteId]=useState(-1)


    const handleModal=(id:number)=>{
        setModalOpen(true)
        setDeleteId(id)
    }

    const handleDelete=()=>{
        const arr=todoList.filter((item)=>item.id!==deleteId)
        setTodoList(arr)
        setModalOpen(false)
    }

    console.log(todoList)
    
    return (
        <main>
            {filteredList.map((todoItem,index)=><TodoItem item={todoItem} handleModal={handleModal} key={index}/>)}
            <DeleteModal isOpen={modalOpen} onClose={()=>setModalOpen(false)} onConfirm={handleDelete} />
        </main>
    )
}

export default TodoContainer