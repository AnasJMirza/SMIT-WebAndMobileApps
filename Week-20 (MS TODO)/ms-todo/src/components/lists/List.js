import React from 'react';
import './List.css'

const List = () => {
    return (
        <div>
            <div className='lists'>
                <div className='addTodo'>
                    <div className='textWrapper'>
                        <textarea className='text' rows={2} cols={200} placeholder="Add a Task" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;