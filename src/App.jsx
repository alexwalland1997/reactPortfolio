import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutme" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contactme" element={<ContactMe/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
