import './App.css';
// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// importing custom componenets

import NavBar from './components/navBar/NavBar.js';

import Logo from './components/logo/Logo.js';

import Button from './components/button/Button';

import HeaderHeading from './components/headerHeading/HeaderHeading';

import HeaderPara from './components/headerPara/HeaderPara';

import HeaderPrimaryPic from './components/headerPrimaryPic/HeaderPrimaryPic';

import HeaderAddressSec from './components/headerAddressSec/HeaderAddressSec';

import HeaderSecendoryPic from './components/headerSecendoryPic/HeaderSecendoryPic';

import HeaderSponsers from './components/headerSponsers/HeaderSponsers';

import HeadingSection01 from './components/headingSection01/HeadingSection01';

import IconsSection01 from './components/iconsSection01/IconsSection01';

import HeadingSec02 from './components/headingSec02/HeadingSec02';

import ParaSec02 from './components/paraSec02/ParaSec02';
import SelectedSec02 from './components/selectedSec02/SelectedSec02';



function App() {

  // Header button props

  let headerBtnData = {
    "backgroundColor" : "white",
    "color" : "#0275d8"
  }


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
              <Button   title = "Signin" backgroundColor="white" color="#0275d8"  />
              <Button   title = "Signup" />
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
            <HeaderAddressSec title="Search" />
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

        <br/>
        <br/>
        <br/>
        <br/>

        <div className='row'>
            
            <HeaderSponsers/>
          
        </div>

      </div>


      {/* Header Section Completed */}

      {/* Section - 01 Starts Here */}

      <div className='container'>
        <div className='row'>
          <div className='col-md-12 headingSection01'>
            <HeadingSection01/>
          </div>
        </div>

        <div className='row'>

          <div className='col-md-12'>
            <IconsSection01/>
          </div>

        </div>

      </div>

      {/* Section - 01 Completed Here */}


      {/* Section - 02 starts here */}

      <div className='container sec2Margin'>

        {/* 1st row */}

        <div className='row'>

          <div className='col-md-6'>
            <HeadingSec02/>
          </div>

          <div className='col-md-4'>
            <div className='sec02Flex'>
              <Button title="Property type ▼" width="10em" color="rgba(87, 107, 129, 1)" backgroundColor="white" border="0.5px solid rgba(87, 107, 129, 1)" />
            </div>
          </div>


          <div className='col-md-2 '>
            <div className='sec02Flex'>
              <Button title="See All Property" width="10em"  />
            </div>
          </div>

        </div>

        {/* 2nd row */}

        <div className='row'>

          <div className='col-md-5'>
            <ParaSec02/>
          </div>

          <div className='col-md-7'></div>

        </div>

        {/* 3rd row */}

        <div className='row'>
          <div className='col-md-6'>
            <SelectedSec02/>
          </div>

          <div className='col-md-6'>
            <SelectedSec02/>
          </div>
        </div>


        <div className='row'>
          <div className='col-md-6'>
            <SelectedSec02/>
          </div>

          <div className='col-md-6'>
            <SelectedSec02/>
          </div>
        </div>

      </div>


      {/* Section - 02 Ends Here here */}
    




    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>

    

    
  );
}

export default App;
