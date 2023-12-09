import { Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contacts from './component/Contact'
import './App.css'
import Heading from './component/Heading'

function App() {
 

  return (
    <>
      <Heading/>
      <div>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
}

export default App
