import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('')
  console.log(name);

  return (
    <div>
      
      {/* Form Section */}
      <input type="text"  onChange={(e)=>setName(e.target.value)}  placeholder='Enter your name'/>

      <p>{name}</p>
    </div>
  );
};

export default App;