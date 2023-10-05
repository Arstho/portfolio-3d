import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import WhoWeAre from './components/WhoWeAre'

function App() {
  return (
    <div className='snap-y snap-mandatory h-screen overflow-y-scroll bg-gradient-to-r from-[#000d24] to-[#0038b6] text-white'>
      <Hero />
      <WhoWeAre />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
