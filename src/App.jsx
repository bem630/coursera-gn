import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/order/main/Home'
import Navbar from './components/pages/order/navbar/Navbar'
import Footer from './components/pages/order/footer/Footer'
import About from './components/pages/order/navigatePage/About'
import Contact from './components/pages/order/navigatePage/Contact'
import ErrorPage from './components/pages/error/ErrorPage'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/apropos' element={<About/>}/>
        <Route path='/formations' element={<About/>}/>
        <Route path='/evenements' element={<About/>}/>
        <Route path='/blogs' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
