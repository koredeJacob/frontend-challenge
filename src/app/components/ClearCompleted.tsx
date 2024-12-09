import { useRecoilValue } from "recoil"
import { todoListState } from "../store/atoms/todoAtom"

type myComponentProps={
    handleModal:(id:number[])=>void
}

// this function uses the same deletemodal component but passes multiple id's to delete more than one id at the same time
function ClearCompleted({handleModal}:myComponentProps){
    const todolist=useRecoilValue(todoListState)

    const deleteCompleted=()=>{
        const newlist=todolist.filter((item)=>item.isComplete===true)//filter completed tasks
        const idonly=newlist.map((item)=>item.id)//get the id of the completed tasks
        handleModal(idonly)//pass list of id's to be deleted
    }

    return(
        <button onClick={deleteCompleted} className="transition duration-200 ease-in hover:scale-105 absolute bottom-3.5 right-3.5 bg-lightblue text-white font-medium p-2 rounded-lg">CLEAR COMPLETED</button>
    )
}

export default ClearCompleted