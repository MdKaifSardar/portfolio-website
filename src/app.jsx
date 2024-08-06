import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/navbar';
import {Home, About, Contact, Projects} from './pages';
import Alert from './components/alert';
import ProjectPage from './pages/projectPage';

const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <main className='bg-slate-300/20'>
        <Router>
            <Navbar/>
            <Alert alert={alert} />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/project-page/:proId' element={<ProjectPage/>}/>
                <Route path='/contact' element={<Contact showAlert={showAlert}/>}/>
            </Routes>
        </Router>
    </main> 
  )
}

export default App;
