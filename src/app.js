import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About/about'
import Header from './components/Header/header'
import Error from './components/Error/error'
import Logement from './pages/Logement/logement'
import Footer from './components/Footer/footer'
import '../src/style/style.css'


function App(){
    return(
        <div>
          <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/About" element={<About />}/>
        <Route path="/Logement/:id" element={<Logement />}/>
      </Routes>
      <Footer/> 
    </Router>  
        </div>
    )
}
 export default App
    
    // document.getElementById('root')
