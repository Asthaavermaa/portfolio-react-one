import './App.scss';
import {Routes,Route,useLocation} from 'react-router-dom';

import Particle from './components/Particle';
import Home from './container/home';
import About from './container/about';
import Skill from './container/skill';
import Contact from './container/contact';
import Navbar from './components/navabar';
import './index.css';



function App(){


  const location=useLocation();
  console.log(location);
  const renderParticleInHomePage = location.pathname==="/";
  return(
    <div className='App'>
      {
        renderParticleInHomePage && <Particle/>
      }
    
    
      <Navbar></Navbar>
      <div className='App_main-page-content'>
      <Routes>
  <Route index path='/' element={<Home></Home>} />
  <Route index path='/container/about' element={<About></About>} />
  <Route index path='/container/contact' element={<Contact></Contact>}/>
  <Route index path='/container/skill' element={<Skill></Skill>}/>
</Routes>
      </div>

    </div>
  )

}

export default App;