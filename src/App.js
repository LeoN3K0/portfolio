import './App.css';
import Nav from './Components/Nav'; 
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import ParticlesBg from "particles-bg";


function App() {
  return (
    <div>
    <ParticlesBg color="#F5F5F5" type="lines" bg={true} /> 
    <Nav/>
    <Home/>
    <About/>
    <Skills/>
    <Work/>    
    <Contact/>
    </div>
  );
}

export default App;
