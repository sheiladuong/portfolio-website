import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import './App.css'

function App() {
  useEffect(() => {
    document.title = "Portfolio | Sheila Duong"; // Change this to your desired title
  }, []);

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
