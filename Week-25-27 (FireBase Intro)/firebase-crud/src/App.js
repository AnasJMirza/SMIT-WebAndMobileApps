import './App.css';
import { db } from './config/firebase';
import {addDoc, collection, getDocs} from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { async } from '@firebase/util';

function App() {

  const usersCollection = collection(db, 'users'); 

  const [users, setUsers] = useState([]);


  let newName, newRollNo, newDegree;

  function setName(e) {
    newName = e.target.value  
    // console.log(name);
  }
  function setAge(e) {
    newRollNo = e.target.value
    // console.log(age);
  }
  function setDegree(e) {
    newDegree = e.target.value
  
  }

  const createUser = async ()=>{
    await addDoc(usersCollection, {name : newName, age : newRollNo, degree : newDegree})

  }

  
  useEffect(() =>{

    const getUsers = async () => {
      const data = await getDocs(usersCollection);
      setUsers(data.docs.map((doc) => doc.data() ));
      // console.log(data.docs.map((item)=>item.data()));

    }

    getUsers();

  }, [])
  
  
  return (
    <div className="App">
      
    <input type='text' placeholder='Name' onChange={setName}></input>
    <input type='number' placeholder='age' onChange={setAge}></input>
    <input type='text' placeholder='degree' onChange={setDegree}></input>
    <button onClick={createUser}>Craete User</button>


      {users.map((user) => {
        return <div>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
          <h1>{user.degree}</h1>
        </div>
      })}
    </div>
  );
}

export default App;
