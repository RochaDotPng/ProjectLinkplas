import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Gallery from './pages/Gallery'
import Policy from './pages/Policy'
import Services from './pages/Services'
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contacts" element={<Contacts/>}/>
      <Route path="/Gallery" element={<Gallery/>}/>
      <Route path="/Policy" element={<Policy/>}/>
      <Route path="/Services" element={<Services/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
