import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteStudent } from '../../store/actions/StudentInfoAction'; 
import './StudentInfo.css'

const StudentInfo = () => {

    const studentsData = useSelector((store)=> store.studentInfoReducer)
    console.log(studentsData);

    let dispatch = useDispatch();

    const delHandler = (rollNo)=>{
        console.log("Submit handelr call");

        let data = studentsData.filter((item) => item.rollNo != rollNo)
        dispatch(deleteStudent(data))
    }

    return (
        <div className='background'>
            <div className='tableLayout'>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Degree</th>
                        <th>Actions</th>
                    </tr>

                    {studentsData.map((item)=>{
                        return <tr>
                            <td>{item.name}</td>
                            <td>{item.rollNo}</td>
                            <td>{item.degree}</td>
                            <td><button onClick={()=>delHandler(item.rollNo)}>Delete</button> <button>Update</button></td>
                        </tr>
                    })}

                </table>
            </div>
        </div>
    );
};

export default StudentInfo;