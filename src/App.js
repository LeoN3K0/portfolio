import './App.css';
import Nav from './Components/Nav'; 
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Skills from './Components/Skills';
import Contact from './Components/Contact';


function App() {
  return (
    <div>
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
