import React, { useState } from 'react';
import './App.css'
import Button from '@mui/material/Button';

const App = () => {

  const data = [
    {name : 'Anas', age : 22, rollNo : 14148},
    {name : 'Imran', age : 18, rollNo : 14234},
    {name : 'Junaid', age : 21, rollNo : 12238},
  ]

  const [studentsData, setStudentsData] = useState(data)

  const [name, setName] = useState('')


  return (
    <div>
      
      {/* Form Section */}

      <input type="text"  onChange={(e)=>setName(e.target.value)}  placeholder='Enter your name'/>

      <div className='btnWrapper'>
      <Button variant="contained">Submit</Button>
      </div>
      

      {/* Data Visualization Section */}

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
  );
};

export default App;