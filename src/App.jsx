import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/navigation/BackToTop/BackToTop';
import Home from './pages/Home'
import News from './pages/News'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Brand from './pages/Brand'
import Partners from './pages/Partners'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Process from './pages/Process'
import Quality from './pages/Quality'
import Contact from './pages/Contact'
import { LEGACY_ROUTES, PORTFOLIO_PUBLISHED, ROUTES } from './content/routes';
import { useLanguage } from './i18n/language-context';
import { getLanguage } from './i18n/languages';

// The length of the page fade, which is defined in styles/_base.scss.
const PAGE_FADE_MS = 200;

// Pages fade in and out. Pages that share a key swap without the fade (one product to another).
const page = (key, element) => (
  <SwitchTransition>
    <CSSTransition key={key} classNames="page-fade" timeout={PAGE_FADE_MS}>{element}</CSSTransition>
  </SwitchTransition>
);

// An address from before the rebrand. A filter or a size in the old address (?marcas=…,
// ?medida=…) is carried over, unless the new address already sets its own.
function LegacyRedirect({ to }) {
  const { search } = useLocation();
  return <Navigate to={to.includes('?') ? to : `${to}${search}`} replace />;
}

LegacyRedirect.propTypes = {
  to: PropTypes.string.isRequired,
};

// Product pages kept their slugs when the catalogue moved from /Products to /produtos.
function LegacyProductRedirect() {
  const { slug } = useParams();
  return <LegacyRedirect to={ROUTES.product(slug)} />;
}

export default function App() {
  const { locale, prefix } = getLanguage(useLanguage());

  return (
    <>
      <Helmet htmlAttributes={{ lang: locale }} />
      {/* The language prefix is the router basename, so routes, links and navigate() calls stay language-agnostic. */}
      <BrowserRouter basename={prefix || "/"}>
        <ScrollToTop />
        <Routes>
          <Route path={ROUTES.home} element={page('home', <Home />)} />
          <Route path={ROUTES.news} element={page('news', <News />)} />
          <Route path={ROUTES.products} element={page('products', <Products />)} />
          <Route path={ROUTES.product(':slug')} element={page('product', <ProductDetail />)} />
          <Route path={ROUTES.brand(':brand')} element={page('brand', <Brand />)} />
          <Route path={ROUTES.partners} element={page('partners', <Partners />)} />
          {/* Hidden for now: its address leads to Parcerias (see PORTFOLIO_PUBLISHED). */}
          <Route
            path={ROUTES.portfolio}
            element={PORTFOLIO_PUBLISHED ? page('portfolio', <Portfolio />) : <Navigate to={ROUTES.partners} replace />}
          />
          <Route path={ROUTES.about} element={page('about', <About />)} />
          <Route path={ROUTES.process} element={page('process', <Process />)} />
          <Route path={ROUTES.quality} element={page('quality', <Quality />)} />
          <Route path={ROUTES.contact} element={page('contact', <Contact />)} />

          {/* Addresses from before the rebrand. The hosts redirect them too (vercel.json, web.config). */}
          {Object.entries(LEGACY_ROUTES).map(([from, to]) => (
            <Route key={from} path={from} element={<LegacyRedirect to={to} />} />
          ))}
          <Route path="/Products/:slug" element={<LegacyProductRedirect />} />

          <Route path="*" element={page('home', <Home />)} />
        </Routes>
      </BrowserRouter>
      <BackToTop />
    </>
  )
}
