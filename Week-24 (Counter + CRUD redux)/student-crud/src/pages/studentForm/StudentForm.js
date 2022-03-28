import React from 'react';
import './StudentForm.css'

const StudentForm = () => {
    return (
        <div className='formLayout'>
            <div className='formBody'>
                <div className='studentInfo'>Student Information</div>
                <hr/>

                <div>
                    <label htmlFor="name">Name</label> <br/>
                    <input id='name' type='text' placeholder='Enter Name' />
                </div>

                <div>
                    <label htmlFor="rollNo">Roll No.</label> <br/>
                    <input id='rollNo' type='number' placeholder='Enter Roll Number' />
                </div>
                <div>
                    <label htmlFor="degree">Degree</label> <br/>
                    <input id='degree' type='text' placeholder='Enter Degree Name' />
                </div>

                <button className='submit'>Submit</button>
            </div>
        </div>
        
    );
};

export default StudentForm;