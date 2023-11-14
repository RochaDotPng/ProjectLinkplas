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
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function App() {

  return (
    <>
      <TransitionGroup>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<CSSTransition key="home" classNames="fade" timeout={500}><Home /></CSSTransition>} />
              <Route path="/About" element={<CSSTransition key="about" classNames="fade" timeout={500}><About /></CSSTransition>} />
              <Route path="/Contacts" element={<CSSTransition key="contacts" classNames="fade" timeout={500}><Contacts /></CSSTransition>} />
              <Route path="/Gallery" element={<CSSTransition key="gallery" classNames="fade" timeout={500}><Gallery /></CSSTransition>} />
              <Route path="/Policy" element={<CSSTransition key="policy" classNames="fade" timeout={500}><Policy /></CSSTransition>} />
              <Route path="/Services" element={<CSSTransition key="services" classNames="fade" timeout={500}><Services /></CSSTransition>} />
          </Routes>
        </BrowserRouter>
      </TransitionGroup>
    </>

  )
}
