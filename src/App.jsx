import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologyList from './components/TechnologyList'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TechnologyList />
      <ToastContainer />
    </div>
  )
}

export default App