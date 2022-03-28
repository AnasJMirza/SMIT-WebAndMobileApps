import React from 'react';
import { useSelector } from 'react-redux';
import './StudentInfo.css'

const StudentInfo = () => {

    const studentsData = useSelector((store)=> store.studentInfoReducer)
    console.log(studentsData);

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
                            <td><button>Delete</button> <button>Update</button></td>
                        </tr>
                    })}

                </table>
            </div>
        </div>
    );
};

export default StudentInfo;