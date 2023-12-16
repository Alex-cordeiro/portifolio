import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TopBar } from './layout/topbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/home';
import { Footer } from './layout/footer';

function App() {

  return (
    <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
