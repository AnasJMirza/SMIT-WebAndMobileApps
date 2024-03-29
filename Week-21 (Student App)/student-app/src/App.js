import React, { useState } from 'react';
import './App.css'
import Button from '@mui/material/Button';

const data = [
  { 
  name : 'Anas',
  email : 'anas@gmail.com',
  rollNo : '14148'
  },

  { 
    name : 'Asad',
    email : 'asad@gmail.com',
    rollNo : '14234'
  },

  { 
    name : 'Ali',
    email : 'ali@gmail.com',
    rollNo : '13982'
  }
]

const App = () => {

  

  const [studentsData, setStudentsData] = useState(data)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rollNo, setRollNo] = useState('')
  const [updateFlag, setUpdateFlag] = useState(false)
  

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

  let oldName = ''
  

  const updateHandler = (item) =>{

    setUpdateFlag(true)
    setName(item.name)
    setEmail(item.email)
    setRollNo(item.rollNo)

    oldName = name
  }

  const updatePress = () => {


    setUpdateFlag(false)
    setName('')
    setEmail('')
    setRollNo('')
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
          <input type="text"  onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter your name' className='input'/>
        </div>
        <div>
          <input type="email"  onChange={(e)=>setEmail(e.target.value)} value={email}  placeholder='Enter your Email' className='input'/>
        </div>
        <div>
          <input type="number"  onChange={(e)=>setRollNo(e.target.value)} value={rollNo} placeholder='Enter your roll no' className='input'/>
        </div>

        <div className='btnWrapper'>
          {updateFlag ? <Button variant="contained" onClick={()=>{updatePress(name, email, rollNo)}}>Update</Button> : <Button variant="contained" onClick={submitHandler}>Submit</Button>}
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
            return <tr> <td className='td'>{item.name}</td> <td className='td'>{item.email}</td> <td className='td'>{item.rollNo}</td> <td className='td'><button onClick={()=>{delHandler(item.email)}}>Delete</button> <button onClick={()=>updateHandler(item)}>Update</button></td> </tr>
          })}

        </table>
      </div>

    </div>
  );
};

export default App;