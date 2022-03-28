import React from 'react';
import { useDispatch } from 'react-redux';
import {addStudent} from '../../store/actions/StudentInfoAction'
import './StudentForm.css'

    let name = '';
    let rollNo = '';
    let degree = '';

const StudentForm = () => {

    let dispatch = useDispatch();

    

    function nameTaker(e) {
        name = e.target.value
    }

    function rollNoTaker(e) {
        rollNo = e.target.value
    }

    function degreeTaker(e) {
        degree = e.target.value
    }


    function submitHandler() {
        console.log("Submit Handler CAll");
        dispatch(addStudent({name: name, rollNo: rollNo, degree: degree}))
        
        
    }

    return (
        <div className='formLayout'>
            <div className='formBody'>
                <div className='studentInfo'>Student Information</div>
                <hr/>

                <div>
                    <label htmlFor="name">Name</label> <br/>
                    <input id='name' type='text' placeholder='Enter Name' onChange={(e)=>nameTaker(e)}/>
                </div>

                <div>
                    <label htmlFor="rollNo">Roll No.</label> <br/>
                    <input id='rollNo' type='number' placeholder='Enter Roll Number' onChange={(e)=>rollNoTaker(e)}/>
                </div>
                <div>
                    <label htmlFor="degree">Degree</label> <br/>
                    <input id='degree' type='text' placeholder='Enter Degree Name' onChange={(e)=>degreeTaker(e)}/>
                </div>

                <button className='submit' onClick={()=>submitHandler()}>Submit</button>
            </div>
        </div>
        
    );
};

export default StudentForm;