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
    var button = document.getElementById('toTop');
    var footerHeight =  document.getElementById('footerComponent').offsetHeight;
    var windowBottom = window.scrollY + window.innerHeight;
    var footerTop = document.documentElement.scrollHeight - footerHeight;

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      button.classList.remove("d-none");
      button.classList.add("d-block");
    } else {
      button.classList.remove("d-block");
      button.classList.add("d-none");
    }
    if (windowBottom > footerTop + 150) {
      button.style.bottom = (windowBottom-footerTop) + 20 + 'px'; // Adjust this value to suit your needs
    } else {
      button.style.bottom = '160px'; // Distance from bottom when fixed
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
            <Route path="*" element={<SwitchTransition><CSSTransition key="home" classNames="page-fade" timeout={500}><Home /></CSSTransition></SwitchTransition>}  />
          </Routes>
        </BrowserRouter>
      </TransitionGroup>
      <Button id='toTop' onClick={topFunction} className='scroll-up-button d-none'><i className="bi bi-chevron-up"></i></Button>
    </>

  )
}
