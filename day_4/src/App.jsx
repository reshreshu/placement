import './App.css';
import Home from './componentss/function/Home';
import About from './componentss/function/About';
import Gallery from './componentss/function/Gallery';
import Contact from './componentss/function/Contact';
import Navbar from './componentss/function/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './assets/css/Home.css';
import './assets/css/Navbar.css';
import "./assets/css/Contact.css";
import UseEffect from './componentss/function/UseEffect';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/about" element ={<About college="kongu engineering college" clg1="naturopathy" clg2="polytechnic"/>} />
        <Route path="/gallery" element ={<Gallery/>} />
        <Route path="/contact" element ={<Contact/>} />
        <Route path="/use-effect" element ={<UseEffect/>} />
      </Routes>
      </BrowserRouter>
     

     
    </div>
  );
}

export default App;