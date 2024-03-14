import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Policy from './pages/Policy'
import Products from './pages/Products'
import "bootstrap-icons/font/bootstrap-icons.css";
import { SwitchTransition, CSSTransition, TransitionGroup } from 'react-transition-group';
import { Button } from 'react-bootstrap';

export default function App() {

  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById("toTop").classList.remove("d-none");
      document.getElementById("toTop").classList.add("d-block");
    } else {
      document.getElementById("toTop").classList.remove("d-block");
      document.getElementById("toTop").classList.add("d-none");
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
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
      <Button id='toTop' onClick={topFunction} className='scroll-up-button'><i class="bi bi-chevron-up"></i></Button>
    </>

  )
}
