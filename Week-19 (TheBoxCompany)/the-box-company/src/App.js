import logo from './logo.svg';
import './App.css';
import Home from './sections/home/Home';
import Reputation from './sections/reputation/Reputation';
import AboutUs from './sections/aboutUs/AboutUs';
import Services from './sections/services/Services';
import Stats from './sections/stats/Stats';

function App() {
  return (
    <div>
      <Home/>

      <Reputation/>

      <AboutUs/>

      <Services/>

      <Stats />

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
