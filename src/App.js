import React from 'react';
import { Route, Routes} from 'react-router-dom'
import './App.css';
import HomeEducative from "./components/HomeEducative"
import NavEducative from './NavEducative';
// import HomeEducative from './components/HomeEducative';
import About from './components/AboutEducative';
function App() {
  return (
    <>
      <NavEducative/>
        <div>
              <Routes>        
                <Route path="/my_educative_pwa"  element={<HomeEducative/>} />
                <Route path="/about"  element={<About/>}/>
              </Routes>
      </div>
  </>
  );
}

export default App;
