import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/order/main/Home'
import Navbar from './components/pages/order/navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
