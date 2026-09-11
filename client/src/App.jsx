import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home/home';
import CardsLibrary from './pages/CardsLibrary/CardsLibrary';
import ReadingSetup from './pages/Reading/ReadingSetup';
import ReadingMain from './pages/Reading/ReadingMain';
import About from './pages/About/About';
import Footer from './components/Footer';


function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reading-setup' element={<ReadingSetup />} />
        <Route path="/reading/main" element={<ReadingMain />} />
        <Route path="/card-library" element={<CardsLibrary />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
