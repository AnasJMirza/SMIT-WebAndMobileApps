import React, { useState } from 'react';
import './App.css'
import Button from '@mui/material/Button';

const data = []

const App = () => {

  

  const [studentsData, setStudentsData] = useState(data)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rollNo, setRollNo] = useState('')
  

  const submitHandler = ()=>{
    

    let newData = {
      name : name,
      email : email,
      rollNo : rollNo
    }

    setStudentsData([...studentsData, newData]);
    
    setName('');
    setEmail('');
    setRollNo('');


  }

  const delHandler = (email)=>{
    let newStudentsData = studentsData.filter((studentsData)=> studentsData.email != email)
    setStudentsData(newStudentsData)
  }


  return (
    <div>
      
      {/* Form Section */}

      

      <div className='form'>
        <div>
        <div>
          <h3>Enter Details</h3>
        </div>
        <div>
          <input type="text"  onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter your name'/>
        </div>
        <div>
          <input type="email"  onChange={(e)=>setEmail(e.target.value)}value={email}  placeholder='Enter your age'/>
        </div>
        <div>
          <input type="number"  onChange={(e)=>setRollNo(e.target.value)} value={rollNo} placeholder='Enter your roll no'/>
        </div>

        <div className='btnWrapper'>
          <Button variant="contained" onClick={submitHandler}>Submit</Button>
        </div>
        </div>
      </div>
      

      {/* Data Visualization Section */}

      <div className='tableSection'>
        <table className='table' border='border'>

          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Actions</th>
          </tr>

          {studentsData.map((item)=>{
            return <tr> <td>{item.name}</td> <td>{item.email}</td> <td>{item.rollNo}</td> <td><button onClick={()=>{delHandler(item.email)}}>Delete</button></td> </tr>
          })}

        </table>
      </div>

    </div>
  );
};

export default App;