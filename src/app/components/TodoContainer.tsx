import { useRecoilState, useRecoilValue, } from "recoil"
import { filteredTodoListState } from "../store/selectors/todoSelector"
import TodoItem from "./TodoItem"
import { useState } from "react"
import DeleteModal from "./DeleteModal"
import { todoListState } from "../store/atoms/todoAtom"
import ClearCompleted from "./ClearCompleted"

function TodoContainer(){

    const filteredList= useRecoilValue(filteredTodoListState)
    const [todoList, setTodoList]= useRecoilState(todoListState)
    const [modalOpen, setModalOpen]=useState(false)
    const [deleteId,setDeleteId]=useState<number[]>([])//array of id's for items to be deleted


    const handleModal=(id:number[])=>{
        setModalOpen(true)
        setDeleteId(id)
    }

    // delete function to delete tasks, it takes in an array of id's
    const handleDelete=()=>{
        const arr=todoList.filter((item)=>!(deleteId.includes(item.id)))
        setTodoList(arr)
        setModalOpen(false)
    }
    
    return (
        <main>
            {filteredList.map((todoItem,index)=><TodoItem item={todoItem} handleModal={handleModal} key={index}/>)}
            <ClearCompleted handleModal={handleModal}/>
            <DeleteModal isOpen={modalOpen} onClose={()=>setModalOpen(false)} onConfirm={handleDelete} />
        </main>
    )
}

export default TodoContainer