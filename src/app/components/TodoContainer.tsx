import { useRecoilState, useRecoilValue, } from "recoil"
import { filteredTodoListState } from "../store/selectors/todoSelector"
import TodoItem from "./TodoItem"
import { useState } from "react"
import DeleteModal from "./DeleteModal"
import { todoListState } from "../store/atoms/todoAtom"
import ClearCompleted from "./ClearCompleted"

type myComponentProps={
    newitem:number
}

function TodoContainer({newitem}:myComponentProps){

    const filteredList= useRecoilValue(filteredTodoListState)
    const [todoList, setTodoList]= useRecoilState(todoListState)
    const [modalOpen, setModalOpen]=useState(false)
    const [removing, setRemoving]=useState<number[]>([])
    const [deleteId,setDeleteId]=useState<number[]>([])//array of id's for items to be deleted


    const handleModal=(id:number[])=>{
        setModalOpen(true)
        setDeleteId(id)
    }
    
    // delete function to delete tasks, it takes in an array of id's
    const handleDelete=()=>{
        setModalOpen(false)

        const toremove=todoList.filter((item)=>deleteId.includes(item.id))
        const toremoveid=toremove.map((item)=>item.id)
        setRemoving(toremoveid)

        setTimeout(()=>{
            const arr=todoList.filter((item)=>!(deleteId.includes(item.id)))
            setTodoList(arr)
            setRemoving([])
        },500)
    }

    if(filteredList.length===0){
        return <div className="w-full h-[200px] bg-main mx-auto pt-10 font-medium text-xl text-orange rounded-lg">
            <h2 className="w-fit mx-auto">NO TASKS HERE!</h2>
        </div>
    }
    
    return (
        <div className="flex flex-col gap-3">
            <main className="h-[250px] lg:h-[300px] md:scrollbar-hide bg-main p-2.5 rounded-xl overflow-y-scroll">
                {filteredList.map((todoItem,index)=><TodoItem item={todoItem} handleModal={handleModal} key={index} remove={removing.includes(todoItem.id)} add={newitem===todoItem.id}/>)}
                <DeleteModal isOpen={modalOpen} onClose={()=>setModalOpen(false)} onConfirm={handleDelete} />
            </main>
            <ClearCompleted handleModal={handleModal}/>
        </div>
    )
}

export default TodoContainer