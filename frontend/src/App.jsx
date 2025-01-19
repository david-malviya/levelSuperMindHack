import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
// import Navbar from './Pages/Navbar/navbar'
import LoginPage from './Pages/LoginPage/LoginPage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import WellnessGames from './Pages/WellnessGames'
import MemoryGarden from './Pages/MemoryGarden'
import BreathGame from './Pages/BreathGame'
import ZenPattern from './Pages/ZenPattern'
import WellnessBook from './Pages/WellnessBook'
import WellnessVideo from './Pages/WellnessVideo'
import DailyHoroscope from './Pages/HoroscopeForm'
import Zodiac from './Pages/Zodiac'
import LangflowChat from './Pages/chatbot/ChatBot'
import Footer from './Pages/Footer'

function App() {
  const [token,setToken] = useState(false)
useEffect(()=>{
const token = localStorage.getItem('token')
if(token){
  setToken(true)
}
},[])
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/WellnessGames' element={<WellnessGames/>}/>
      <Route path='/memorygarden_game' element={<MemoryGarden/>}/>
      <Route path='/breath_game' element={<BreathGame/>}/>
      <Route path='/zen_patterns' element={<ZenPattern/>}/>
      <Route path='/wellness_books' element={<WellnessBook/>}/>
      <Route path='/videos' element={<WellnessVideo/>}/>
      <Route path='/horoscope' element={<DailyHoroscope/>}/>
      <Route path='/zodiac' element={<Zodiac/>}/>
      <Route path='/chatbot' element={<LangflowChat/>}/>
      <Route
  path="/authenticate"
  element={token ? <Navigate to="/" replace /> : <LoginPage />}
/>      <Route/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
