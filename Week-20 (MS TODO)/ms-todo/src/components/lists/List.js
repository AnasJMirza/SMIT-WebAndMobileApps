import React, { useState } from 'react';
import './List.css'

let data = ["Some work"]

const List = () => {

    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([data])

    const submitHandler = ()=>{

        let newTodo = inputValue
        setTodos([...todos, newTodo])
    }

    // const enter = (e)=>{
    //     if (e.keyCode === 13) {
    //         // Cancel the default action, if needed
    //         e.preventDefault();
    //         // Trigger the button element with a click
    //         click();
    //     }
    // }


    return (
        <div>
            {/* Add todo Section to get all the values enter by user */}

            <div className='lists'>
                <div className='addTodo'>
                    <div className='textWrapper'>
                        <input type='text' placeholder='Add Some Task' onChange={(e)=>{setInputValue(e.target.value)}} className='addTask' />
                    </div>

                    <button onClick={submitHandler}>submit</button>
                </div>
            </div>

            {/* Table in which the data stored */}

            <div className='tableSection'>
                <table className='table'>
                    {todos.map((item)=>{
                        return <tr><td>{item}</td></tr>
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