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
                    </tr>

                    <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default StudentInfo;