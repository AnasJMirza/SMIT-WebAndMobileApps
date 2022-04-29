import React, { useEffect } from 'react';
import Button from '../../components/button/Button';
import UseHome from './UseHome';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { async } from '@firebase/util';
import { useDispatch } from 'react-redux';
import { FetchStudent, FETCH_STUDENT } from '../../store/actions/AddStudent';

const Home = () => {
    const dispatch = useDispatch()

    const studentsCollection = collection(db, "students")

    useEffect(()=>{
        const getData = async ()=>{
            const firebaseData = await getDocs(studentsCollection)
            // console.log(firebaseData.docs.map((item)=>item.data()));
            const cleanData = firebaseData.docs.map((item)=>item.data())

            dispatch(FetchStudent(cleanData))
        }

        getData();
    }, [])

    const {students} = UseHome()
    // console.log("students kuch khaas", students[0]);
    // const readData = students[0][0];
    // console.log("Kuch Khhas", readData);

    // const arr = {
    //     name : {name : 'Anas'}
    // }
    // console.log(arr.name.name);




    return (
        <div>
            <Button label="Add" route="/add-students" bg="crimson" color="white"/>

            <table border="1">
                <thead>
                    <th>
                        <td>Name</td>
                    </th>
                </thead>
                <tbody>
                    {/* {students[0].map((item)=>{
                        return <tr>
                            <td>{item.name}</td>
                        </tr>
                    })}         */}
                </tbody>
            </table>
        
            Home
            
        </div>
    );
};

export default Home;