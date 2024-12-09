import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../store/atoms/todoAtom'
import { Todo } from 'src/app/types'

function AddTodo(){

    const [text,setText]=useState('')
    const setTodoList=useSetRecoilState(todoListState)

    const handleText= (e:React.ChangeEvent<HTMLInputElement>) =>(
        setText(e.target.value)
    )

    const handleClick=()=>{
    if (text){
            setTodoList((oldTodoList:Todo[]):Todo[] => [
        ...oldTodoList,
        {
            id: oldTodoList.length?oldTodoList[oldTodoList.length-1].id+1:0,
            item: text,
            isComplete: false,
        },
        ])
    }
    setText('')
    }

    return (
        <div className='flex'>
            <input className='bg-main text-orange p-1 pl-2 rounded-l-xl outline-0' type='text' value={text} onChange={handleText} placeholder='What do you need to do?'/>
            <button onClick={handleClick} className='bg-lightblue p-1 px-2 text-white rounded-r-xl font-medium'>ADD</button>
        </div>
    )
}

export default AddTodo