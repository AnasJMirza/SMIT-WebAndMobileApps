import React, { useState } from 'react';
import './List.css'


const List = () => {

    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([])

    const submitHandler = ()=>{

        let newTodo = inputValue
        setTodos([...todos, newTodo])
        setInputValue('')
        
    }

    const enter = (event)=>{
        if (event.keyCode == 13) {
            submitHandler()
            
            
        }
    }

    const delHandler = (index) =>{
        console.log(index);
        let newList = [todos.filter((item,i)=> i != index) ]
        console.log(newList);
        setTodos(newList)
    }


    return (
        <div>
            {/* Add todo Section to get all the values enter by user */}

            <div className='lists'>
                <div className='addTodo'>
                    <div className='textWrapper'>
                        <input type='text' placeholder='Add Some Task' onChange={(e)=>{setInputValue(e.target.value)}} className='addTask' onKeyUp={enter} value={inputValue} />
                    </div>
                </div>
            </div>

            {/* Table in which the data stored */}

            <div className='tableSection'>
                <table className='table'>
                    {todos.map((item, index)=>{
                        return <tr><td> <div className='listFlex'><div className='tableFlex'><input type={"radio"}/> <div className='tableData'>{item.task} <div className='tasks'>Tasks</div></div></div> <div className='delBtn'><button onClick={()=>delHandler(index)}>Delete</button></div></div> <hr/></td></tr>
                    })}
                </table>
            </div>
            
        </div>
    );
};

export default List;