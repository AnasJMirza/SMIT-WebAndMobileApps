import './App.css';
// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// importing NavBar componenet
import NavBar from './components/navBar/NavBar.js';

import Logo from './components/logo/Logo.js';

import Button from './components/button/Button';


function App() {
  return (
    <div className='container'>

      <div className='row'>

      <div className='col-md-2'>
        <div>
          <Logo/>
        </div>
      </div>

      <div className='col-md-7'>
        <div>
          <NavBar/>
        </div>
      </div>

      <div className='col-md-3'>
        <div className='headerButton'>
          <Button/>
          <Button/>
        </div>
      </div>
        
      </div>
      
    </div>
  );
}

export default App;
