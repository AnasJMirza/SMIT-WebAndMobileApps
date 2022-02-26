import logo from './logo.svg';
import './App.css';
import Home from './sections/home/Home';
import Reputation from './sections/reputation/Reputation';
import AboutUs from './sections/aboutUs/AboutUs';
import Services from './sections/services/Services';
import Stats from './sections/stats/Stats';
import Project from './sections/project/Project';
import ContactUs from './sections/contactUs/ContactUs';
import Footer from './sections/footer/Footer';

function App() {
  return (
    <div>
      <Home/>

      <Reputation/>

      <AboutUs/>

      <Services/>

      <Stats />

      <Project/>

      <ContactUs/>

      <Footer/>

  
    </div>
  );
}

export default App;
