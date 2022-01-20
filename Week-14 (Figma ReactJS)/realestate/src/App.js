import './App.css';
// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// importing NavBar componenet
import NavBar from './components/navBar/NavBar.js';

import Logo from './components/logo/Logo.js';

import Button from './components/button/Button';

import HeaderHeading from './components/headerHeading/HeaderHeading';
import HeaderPara from './components/headerPara/HeaderPara';
import HeaderPrimaryPic from './components/headerPrimaryPic/HeaderPrimaryPic';
import HeaderAddressSec from './components/headerAddressSec/HeaderAddressSec';
import HeaderSecendoryPic from './components/headerSecendoryPic/HeaderSecendoryPic';


function App() {
  return (
    <div className='parent'> 

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

      <div className='container'>
        
        <div className='row'>

          <div className='col-md-6'>
            <div className='headerMargin'>
              <HeaderHeading/>
            </div>
            <HeaderPara/>
            <HeaderAddressSec/>
          </div>

          <div className='col-md-4'>
            <HeaderPrimaryPic/>
          </div>

          <div className='col-md-2'>
            <div className='secendoryPicPosition'>
              <HeaderSecendoryPic/>
            </div>
          </div>

        </div>

      </div>

      
      <br/>
    <br/>
    <br/>
    </div>

    
  );
}

export default App;
