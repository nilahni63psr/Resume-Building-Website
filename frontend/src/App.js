import logo from './logo.svg';
import './App.css';
import {NavLink,Outlet} from 'react-router-dom'
import { Route,Routes} from 'react-router-dom';
import Home from './component/Home';
import SignUp from './component/SignUp';
import Contact from './component/Contact';
import AboutUs from './component/AboutUs';
import Login from './component/Login';
import Heading from './component/Heading';
import Education from './component/Education';
import Experience from './component/Experience';
import Skills from './component/Skills';
import Preview from './component/Preview';
import Experience2 from './component/Experience2';
import Achievements from './component/Achievements';
function App() {
  return (
    <div className="App">
      <Routes>
    <Route path='/signup' element={<SignUp />} />
    <Route path='/' element={<Home />} />
    <Route path='/aboutus' element={<AboutUs />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/login' element={<Login />} />
    <Route path='/heading' element={<Heading />} />
    <Route path='/education' element={<Education />} />
    <Route path='/experience' element={<Experience />} />
    <Route path='/skills' element={<Skills />} />
    <Route path='/preview' element={<Preview />} />
    <Route path='/experience2' element={<Experience2 />} />
    <Route path='/achievements' element={<Achievements />} />
    </Routes>
    </div>
  );
}

export default App;
