
import './App.css'
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx'
import Hero from './components/Hero.jsx';
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'


function App() {


  return (
    <>
    <div className="bg-gray-900">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
     
    </>
  )
}

export default App
