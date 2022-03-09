import React, { useState } from 'react';
import './App.css'
import Button from '@mui/material/Button';

const data = [
  {name : 'Anas', age : 22, rollNo : 14148},
  {name : 'Imran', age : 18, rollNo : 14234},
  {name : 'Junaid', age : 21, rollNo : 12238},
]

const App = () => {

  

  const [studentsData, setStudentsData] = useState(data)

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [rollNo, setRollNo] = useState('')
  

  const submitHandler = ()=>{
    

    let newData = {
      name : name,
      age : age,
      rollNo : rollNo
    }

    setStudentsData([...studentsData, newData]);
    
    // setName('');
    // setAge('');
    // setRollNo('');


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
          <input type="text"  onChange={(e)=>setName(e.target.value)}  placeholder='Enter your name'/>
        </div>
        <div>
          <input type="number"  onChange={(e)=>setAge(e.target.value)}  placeholder='Enter your age'/>
        </div>
        <div>
          <input type="number"  onChange={(e)=>setRollNo(e.target.value)}  placeholder='Enter your roll no'/>
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
            <th>Age</th>
            <th>Roll No</th>
          </tr>

          {studentsData.map((item)=>{
            return <tr> <td>{item.name}</td> <td>{item.age}</td> <td>{item.rollNo}</td> </tr>
          })}

        </table>
      </div>

    </div>
  );
};

export default App;