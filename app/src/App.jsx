import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Camppage } from './pages/camppage/camppage'
import { Eventpage } from './pages/eventpage/eventpage'
import { Frontpage } from './pages/frontpage/frontpage'
import { Infopage } from './pages/infopage/infopage'
import { Loginpage } from './pages/loginpage/loginpage'
import { Ticketpage } from './pages/ticketpage/ticketpage'
import { MainLayout } from './layout/mainLayout'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}/>
        <Route index element={<Frontpage/>} />
        <Route path="/forside" element={<Frontpage/>} />
        <Route path="/events" element={<Eventpage/>} />
        <Route path="/camps" element={<Camppage/>} />
        <Route path="/info" element={<Infopage/>} />
        <Route path="/biletter" element={<Ticketpage/>} />
        <Route path="/login" element={<Loginpage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
