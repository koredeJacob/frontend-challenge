import { useRecoilState } from "recoil"
import { todoListState } from "../store/atoms/todoAtom"
import { Todo } from "../types"

type myComponentProps={
    remove:boolean,
    add:boolean,
    item:Todo,
    handleModal:(id:number[])=>void
}

function TodoItem({item,handleModal,remove,add}:myComponentProps){

    const [todoList,setTodoList]=useRecoilState(todoListState)

    //change status of todo task
    
    const handleChange=()=>{
        const newitem={...item,isComplete:!item.isComplete}
        const newList=todoList.map((item)=>{
            if (item.id===newitem.id){
                return newitem
            }
            return item
        })
        setTodoList(newList)
    }

    return (
        <div>
            <div className={`flex content-center gap-x-2 py-1.5 lg:py-2 transition duration-500 ease-in ${remove ? "opacity-0":"opacity-1"} ${ add ?"opacity-0":"opacity-1"}`}>
                <input type="checkbox" className="w-4 transition duration-300 checked:scale-125 " checked={item.isComplete} onChange={handleChange}/>
                <p className={`transition-all duration-500 w-[90%] text-lg text-dark tracking-wide font-medium ${item.isComplete?'line-through decoration-2 text-light animate-dashFade':''}`}>{item.item}</p>
                <button onClick={()=>handleModal([item.id])} aria-label="delete button" className="transition duration-300 ease-in-out hover:scale-110">
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.3" clipPath="url(#clip0_108_146)">
                            <path d="M7.99999 25.3333C7.99999 26.8 9.19999 28 10.6667 28H21.3333C22.8 28 24 26.8 24 25.3333V9.33333H7.99999V25.3333ZM10.6667 12H21.3333V25.3333H10.6667V12ZM20.6667 5.33333L19.3333 4H12.6667L11.3333 5.33333H6.66666V8H25.3333V5.33333H20.6667Z" fill="#B30B04"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_108_146">
                            <rect width="28" height="28" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
            <hr className={`w-[90%] border-2 bg-lightblue mx-auto transition duration-500 ease-in ${remove ? "opacity-0":""} ${ add ?"opacity-0":"opacity-1"}`} />
        </div>
    )
}

export default TodoItem