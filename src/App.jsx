import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Policy from './pages/Policy'
import Products from './pages/Products'
import "bootstrap-icons/font/bootstrap-icons.css";
import { SwitchTransition, CSSTransition, TransitionGroup } from 'react-transition-group';

export default function App() {
  return (
    <>
      <TransitionGroup>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<SwitchTransition><CSSTransition key="home" classNames="page-fade" timeout={500}><Home /></CSSTransition></SwitchTransition>} />
            <Route path="/About" element={<SwitchTransition><CSSTransition key="about" classNames="page-fade" timeout={500}><About /></CSSTransition></SwitchTransition>} />
            <Route path="/Contacts" element={<SwitchTransition><CSSTransition key="contacts" classNames="page-fade" timeout={500}><Contacts /></CSSTransition></SwitchTransition>} />
            <Route path="/Policy" element={<SwitchTransition><CSSTransition key="policy" classNames="page-fade" timeout={500}><Policy /></CSSTransition></SwitchTransition>} />
            <Route path="/Products" element={<SwitchTransition><CSSTransition key="products" classNames="page-fade" timeout={500}><Products /></CSSTransition></SwitchTransition>} />
            <Route path="/Products/:parameter" element={<SwitchTransition><CSSTransition key="products" classNames="page-fade" timeout={500}><Products /></CSSTransition></SwitchTransition>} />
          </Routes>
        </BrowserRouter>
      </TransitionGroup>
    </>

  )
}
