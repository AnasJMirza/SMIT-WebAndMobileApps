import React from 'react';
import { useSelector } from 'react-redux';
import './StudentInfo.css'

const StudentInfo = () => {

    const name = useSelector((store)=> store.studentInfoReducer.name)
    const rollNo = useSelector((store)=> store.studentInfoReducer.rollNo)
    const degree = useSelector((store)=> store.studentInfoReducer.degree)

    return (
        <div className='background'>
            <div className='tableLayout'>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Degree</th>
                    </tr>

                    <tr>
                        <td>{name}</td>
                        <td>{rollNo}</td>
                        <td>{degree}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default StudentInfo;