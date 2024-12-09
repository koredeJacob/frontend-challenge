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
        setTodoList((oldTodoList:Todo[]):Todo[] => [
      ...oldTodoList,
      {
        id: oldTodoList.length?oldTodoList[oldTodoList.length-1].id+1:0,
        item: text,
        isComplete: false,
      },
    ]);
    setText('');
    }



    return (
        <>
            <input type='text' value={text} onChange={handleText}/>
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default AddTodo