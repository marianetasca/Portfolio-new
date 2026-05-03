
import './App.css'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import Navbar from './components/Navbar'
import Projects from './components/sections/Projects'

function App() {

  return (
    <>
      <div className="heroBg">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
      </div>
    </>
  )
}

export default App
