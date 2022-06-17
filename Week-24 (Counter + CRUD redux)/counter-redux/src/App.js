import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {doIncrement, doDecrement} from './store/actions/CounterAction'


function App() {

  const dispatch = useDispatch()


  const counter = useSelector((store)=> store.CounterReducer.count);
  console.log("count", counter);
  return (
    <div className='counterApp'>

      <div className='content'>
        <div className='btn'><button className='minusButton' onClick={()=> dispatch(doDecrement())}>-</button></div>
        <div className='counter'>{counter}</div>
        <div className='btn'><button className='plusButton' onClick={()=> dispatch(doIncrement())}>+</button></div>
      </div>

      
      
    </div>
  );
}

export default App;
