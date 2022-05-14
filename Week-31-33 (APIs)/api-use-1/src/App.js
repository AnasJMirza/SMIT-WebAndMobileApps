import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    get()
  }, [])

  const [imgs, setImgs] = useState([])

  const get = async () => {
    const data = await axios.get("https://fakestoreapi.com/products")
    console.log(data.data);
    setImgs(data.data)
  }


  return (
    <div className="App">
        {imgs.map((item)=> {
          return <div>
            <h1>{item.category}</h1>
            <div className='card'>
              <img src={item.image} alt="ooo" width="50%"/>
              <h2>{item.title}</h2>
              {/* <p>{item.description}</p> */}
              <p className='rupee'> {item.price} Rupees</p>
            </div>
            <br/>
          </div>
        })}
    </div>
  );
}

export default App;
