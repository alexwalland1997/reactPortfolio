import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-Router-dom';
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import ContactMe from './components/contact'
import Navbar  from './components/header'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/reactPortfolio/" element={<Home/>}/>
        <Route path="/aboutme" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contactme" element={<ContactMe/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
