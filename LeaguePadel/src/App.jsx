import './App.css';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import CrearTorneo from './components/CrearTorneo/CrearTorneo'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
  
     <div>
      <switch>

      <Routes>
        
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/CrearTorneo" element={<CrearTorneo/>} />
        
      </Routes>
      </switch>
    </div>
        
  
  )
}

export default App
