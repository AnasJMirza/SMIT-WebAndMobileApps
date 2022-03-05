import './App.css';
import { Grid } from '@mui/material';
import { useState } from 'react';


function App() {

  const data = [
    {name : 'Anas J Mirza', rollNo : 14148, age : 22, degree : 'BSCS'},
    {name : 'Umar', rollNo : 12228, age : 19, degree : 'BSSE'},
    {name : 'ali', rollNo : 12138, age : 20, degree : 'BCA'},
  ]
 


  

  const [name, setName] = useState('');

  const submitHandler = () =>{
    return null
  }

  return (
    <div>

      <Grid container>

        {/* Form Section */}

        <Grid item md={6}>
          <form>

            Name : &nbsp; &nbsp;  &nbsp; <input  className='input' type={"text"} placeholder="Enter your Name" onChange={(e)=>{setName(e.target.value)}}/><br/>

            Roll No. : &nbsp;&nbsp; <input className='input' type={"number"} placeholder="Enter your Roll Number"/> <br/>

            Age : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input className='input' type={"number"} placeholder="Enter your Age"/><br/>

            Degree : &nbsp;&nbsp;&nbsp; <input className='input' type={"text"} placeholder="Enter your Degree"/><br/>

          </form>

          <div className='submit' onClick={submitHandler}>Submit</div>
        </Grid>





        {/* Table Section */}

        <Grid item md={6}>

          <table border="border" width={"70%"} >
            <tr>
              <th>Name</th>  
              <th>Roll Number</th>  
              <th>Age</th>  
              <th>Degree</th>
            </tr> 
              
                {data.map((item)=>{
                  return (<tr>{item.name}</tr>)
                })}

                {data.map((item)=>{
                  return (<tr>{item.rollNo}</tr>)
                })}
            

          </table>

        </Grid>

      </Grid>

    </div>
  );
}

export default App;
