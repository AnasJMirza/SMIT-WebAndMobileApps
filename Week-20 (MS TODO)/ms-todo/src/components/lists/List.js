import React, { useState } from 'react';
import './List.css'


const List = () => {

    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([])

    const submitHandler = ()=>{

        let newTodo = inputValue
        setTodos([...todos, newTodo])
        
    }

    const enter = (event)=>{
        if (event.keyCode == 13) {
            console.log("anas");
            submitHandler()
            
            
        }
    }


    return (
        <div>
            {/* Add todo Section to get all the values enter by user */}

            <div className='lists'>
                <div className='addTodo'>
                    <div className='textWrapper'>
                        <input type='text' placeholder='Add Some Task' onChange={(e)=>{setInputValue(e.target.value)}} className='addTask' onKeyUp={enter} />
                    </div>
                </div>
            </div>

            {/* Table in which the data stored */}

            <div className='tableSection'>
                <table className='table'>
                    {todos.map((item)=>{
                        return <tr><td>{item}<hr/></td></tr>
                    })}

                    {/* <tr>
                        <td>anas</td>
                    </tr> */}
                </table>
            </div>
            
        </div>
    );
};

export default List;