import { Form, Route, Routes, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
import './App.css'
import Home from './components/pages/order/main/Home'
import Navbar from './components/pages/order/navbar/Navbar'
import Footer from './components/pages/order/footer/Footer'
import About from './components/pages/order/navigatePage/About'
import Contact from './components/pages/order/navigatePage/Contact'
import ErrorPage from './components/pages/error/ErrorPage'
import Formations from './components/pages/order/main/formation/Formations'
import Blogs from './components/pages/order/navigatePage/blog/Blogs'
import BlogDetail from './components/pages/order/navigatePage/blog/BlogDetail'
import FormationDetail from './components/pages/order/main/formation/FormationDetail'
import Evenement from './components/pages/order/navigatePage/evenement/Evenements'
import EvenementDetail from './components/pages/order/navigatePage/evenement/EvenementDetail'
import CategoryDetail from './components/pages/order/main/category/CategeryDetail'

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {

  return (
    <div>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/apropos' element={<About/>}/>
        <Route path='/formations' element={<Formations/>}/>
        <Route path='/category/:id' element={<CategoryDetail/>} />
        <Route path='/formations/:formationName' element={<FormationDetail/>}/>
        <Route path='/evenements' element={<Evenement/>}/>
        <Route path='/evenements/:Id' element={<EvenementDetail/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blogs/:id' element={<BlogDetail/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
