import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsSidebar from "../components/ProductsSidebar";
import TupperLink from '../components/products-components/take_away/TupperLink';
import CaixaMedicamentos from '../components/products-components/farmacy/CaixaMedicamentos';
import EPharma from '../components/products-components/farmacy/EPharma';
import Abracadeira from '../components/products-components/industry/Abracadeira';
import Tampa from '../components/products-components/industry/Tampa';
import Intercalar from '../components/products-components/industry/Intercalar';
import TampaVeio from '../components/products-components/industry/TampaVeio';
import Anilha from '../components/products-components/industry/Anilha';
import UltraSons from '../components/products-components/services/UltraSons';
import MobileBottomBar from '../components/MobileBottomBar';
import { Helmet } from 'react-helmet-async';

const PRODUCT_CATEGORIES = ['Farmaceutica', 'Take-Away', 'Industria', 'Servicos'];

export default function Products() {
  let { parameter } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(() =>
    parameter && PRODUCT_CATEGORIES.includes(parameter) ? parameter : 'Farmaceutica'
  );
  const [activeProduct, setActiveProduct] = useState('Farmaceutica');
  const [autoOpenSections, setAutoOpenSections] = useState({
    'Industria': false,
    'Servicos': false,
    'Take-Away': false
  });
  let navigate = useNavigate();
  const location = useLocation();

  // Mobile layout renders only `selectedProduct`; keep it aligned with /Products/:parameter.
  useEffect(() => {
    if (parameter && PRODUCT_CATEGORIES.includes(parameter)) {
      setSelectedProduct(parameter);
    } else if (parameter == null || parameter === undefined) {
      setSelectedProduct('Farmaceutica');
    }
  }, [parameter]);
  
  // Refs for each product section
  const keepyFarmaRef = useRef(null);
  const keepyLinkRef = useRef(null);
  const ePharmaRef = useRef(null);
  const abracadeiraRef = useRef(null);
  const tampaRef = useRef(null);
  const intercalarRef = useRef(null);
  const tampaVeioRef = useRef(null);
  const anilhaRef = useRef(null);
  const ultraSonsRef = useRef(null);

  // SEO content based on selected product category
  const getPageMeta = () => {
    switch(selectedProduct) {
      case 'Industria':
        return {
          title: 'Produtos Industriais - Linkplas',
          description: 'Produtos industriais Linkplas: abraçadeiras, tampas, intercalares, anilhas. Componentes plásticos de alta qualidade para aplicações industriais.',
          url: 'https://www.linkplas.pt/Products/Industria'
        };
      case 'Farmaceutica':
        return {
          title: 'Produtos Farmacêuticos - Linkplas',
          description: 'Caixas de transporte de medicamentos Linkplas. Produtos farmacêuticos em plástico de alta resistência, seguros e certificados.',
          url: 'https://www.linkplas.pt/Products/Farmaceutica'
        };
      case 'Take-Away':
        return {
          title: 'KeepyLink - Linkplas',
          description: 'Tupperwares take-away KeepyLink: recipientes reutilizáveis, tuppers ecológicos empilháveis. Alternativa sustentável aos descartáveis para restaurantes e delivery.',
          url: 'https://www.linkplas.pt/Products/Take-Away'
        };
      case 'Servicos':
        return {
          title: 'Serviços - Linkplas',
          description: 'Serviços Linkplas: soldadura por ultra sons de peças plásticas. Soluções técnicas especializadas para a indústria.',
          url: 'https://www.linkplas.pt/Products/Servicos'
        };
      default:
        return {
          title: 'Produtos - Linkplas',
          description: 'Descubra todos os produtos Linkplas: componentes industriais, produtos farmacêuticos, take-away KeepyLink e serviços de soldadura.',
          url: 'https://www.linkplas.pt/Products'
        };
    }
  };

  const pageMeta = getPageMeta();

  function ChangeUrl(param) {
    if (param == null || param == undefined) {
      navigate('/Products/Farmaceutica');
    } else {
      navigate('/Products/' + param);
    }
  }

  // Function to get products for each category
  const getProductsForCategory = (category) => {
    switch(category) {
      case 'Farmaceutica':
        return [
          { component: <CaixaMedicamentos />, ref: keepyFarmaRef, id: 'keepyfarma' },
          { component: <EPharma />, ref: ePharmaRef, id: 'EPharma' },
        ];
      case 'Take-Away':
        return [
          { component: <TupperLink />, ref: keepyLinkRef, id: 'keepylink' }
        ];
      case 'Industria':
        return [
          { component: <Tampa />, ref: tampaRef, id: 'tampa' },
          { component: <Intercalar />, ref: intercalarRef, id: 'intercalar' },
          { component: <TampaVeio />, ref: tampaVeioRef, id: 'tampaveio' },
          { component: <Anilha />, ref: anilhaRef, id: 'anilha' },
          { component: <Abracadeira />, ref: abracadeiraRef, id: 'abracadeira' }
        ];
      case 'Servicos':
        return [
          { component: <UltraSons />, ref: ultraSonsRef, id: 'ultrasons' }
        ];
      default:
        return [];
    }
  };

  const handleProductChange = (value) => {
    const isCategory = PRODUCT_CATEGORIES.includes(value);

    if (isCategory) {
      setSelectedProduct(value);
      ChangeUrl(value);

      // On mobile, scroll to top when switching categories
      if (window.innerWidth <= 991) { // lg breakpoint
        window.scrollTo(0, 0);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
      }
      return;
    }

    // Product item clicked -> scroll to its section.
    const productRefs = {
      'KeepyFarma': keepyFarmaRef,
      'KeepyLink': keepyLinkRef,
      'Abracadeira': abracadeiraRef,
      'Tampa': tampaRef,
      'Intercalar': intercalarRef,
      'TampaVeio': tampaVeioRef,
      'Anilha': anilhaRef,
      'UltraSons': ultraSonsRef,
      'EPharma': ePharmaRef,
    };

    const idFallback = {
      KeepyFarma: 'keepyfarma',
      KeepyLink: 'keepylink',
      EPharma: 'EPharma',
      Abracadeira: 'abracadeira',
      Tampa: 'tampa',
      Intercalar: 'intercalar',
      TampaVeio: 'tampaveio',
      Anilha: 'anilha',
      UltraSons: 'ultrasons',
    };

    const targetRef = productRefs[value];
    // Desktop + mobile layouts are both mounted (Bootstrap toggles via CSS),
    // so refs can end up pointing at the hidden element. Prefer the visible DOM node.
    const idsToTry = [value, idFallback[value]].filter(Boolean);
    const candidates = idsToTry.flatMap((id) =>
      Array.from(document.querySelectorAll(`#${id}`))
    );
    const targetEl =
      candidates.find((el) => el.getClientRects().length > 0) ||
      candidates[0] ||
      targetRef?.current;

    if (value === 'KeepyFarma') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveProduct('KeepyFarma');
      return;
    }

    if (targetEl) {
      if (typeof targetEl.scrollIntoView === 'function') {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        const top = targetEl.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }
    }

    setActiveProduct(value);
  };

  // If a hash is present (e.g. /Products/Farmaceutica#keepyfarma), scroll to it on load.
  useEffect(() => {
    const hash = (location.hash || '').replace('#', '').trim();
    if (!hash) return;

    const scrollToHash = () => {
      const candidates = Array.from(document.querySelectorAll(`#${CSS.escape(hash)}`));
      const targetEl =
        candidates.find((el) => el.getClientRects().length > 0) ||
        candidates[0];

      if (!targetEl) return;

      // Keep sidebar highlight consistent when deep-linking.
      if (hash === 'keepyfarma') setActiveProduct('KeepyFarma');
      if (hash === 'keepylink') setActiveProduct('KeepyLink');
      if (hash === 'EPharma') setActiveProduct('EPharma');

      if (typeof targetEl.scrollIntoView === 'function') {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        const top = targetEl.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }
    };

    // Wait a tick to ensure DOM is mounted.
    const t = window.setTimeout(scrollToHash, 0);
    return () => window.clearTimeout(t);
  }, [location.hash]);

  // Scroll detection to highlight active product and auto-open accordions
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header
      
      // If we're at the very top, ensure KeepyFarma is active
      if (window.scrollY <= 10) {
        setActiveProduct('KeepyFarma');
        return;
      }

      const productRefs = [
        { ref: keepyFarmaRef, id: 'KeepyFarma', section: 'Farmaceutica' },
        { ref: ePharmaRef, id: 'EPharma', section: 'Farmaceutica' },
        { ref: keepyLinkRef, id: 'KeepyLink', section: 'Take-Away' },
        { ref: tampaRef, id: 'Tampa', section: 'Industria' },
        { ref: intercalarRef, id: 'Intercalar', section: 'Industria' },
        { ref: tampaVeioRef, id: 'TampaVeio', section: 'Industria' },
        { ref: anilhaRef, id: 'Anilha', section: 'Industria' },
        { ref: abracadeiraRef, id: 'Abracadeira', section: 'Industria' },
        { ref: ultraSonsRef, id: 'UltraSons', section: 'Servicos' }
      ];

      for (let i = productRefs.length - 1; i >= 0; i--) {
        const { ref, id, section } = productRefs[i];
        if (ref.current && ref.current.offsetTop <= scrollPosition) {
          setActiveProduct(id);
          
          // Auto-open accordion for the current section
          if (section === 'Industria' || section === 'Servicos' || section === 'Take-Away') {
            setAutoOpenSections(prev => ({
              ...prev,
              [section]: true
            }));
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="products-page">
      <Helmet>
        <title>{pageMeta.title}</title>
        <meta name="description" content={pageMeta.description} />
        <meta property="og:title" content={pageMeta.title} />
        <meta property="og:description" content={pageMeta.description} />
        <meta property="og:url" content={pageMeta.url} />
        <meta property="og:updated_time" content="2026-03-12T00:00:00+00:00" />
        <link rel="canonical" href={pageMeta.url} />
      </Helmet>
      <Header />
      
      <Container fluid className="products-main-container">
        <Container className="p-0">
        <Row>
          {/* Desktop Sidebar */}
          <Col lg={3} className="d-none d-lg-block">
            <ProductsSidebar 
              selectedProduct={selectedProduct} 
              activeProduct={activeProduct}
              autoOpenSections={autoOpenSections}
              onProductChange={handleProductChange} 
            />
          </Col>
          
          {/* Main Content */}
          <Col lg={9} className="products-content-area">
            {/* Desktop: Show all products */}
            <div className="desktop-products d-none d-lg-block">
              {/* KeepyFarma - First Product */}
              <div ref={keepyFarmaRef} id="keepyfarma">
                <CaixaMedicamentos />
              </div>

              {/* EPharma - Second Product */}
              <div ref={ePharmaRef} id="EPharma">
                <EPharma />
              </div>
              
              {/* KeepyLink - Second Product */}
              <div ref={keepyLinkRef} id="keepylink">
                <TupperLink />
              </div>
              
              {/* Industry Products */}            
              <div ref={tampaRef} id="tampa">
                <Tampa />
              </div>
              
              <div ref={intercalarRef} id="intercalar">
                <Intercalar />
              </div>
              
              <div ref={tampaVeioRef} id="tampaveio">
                <TampaVeio />
              </div>
              
              <div ref={anilhaRef} id="anilha">
                <Anilha />
              </div>

              <div ref={abracadeiraRef} id="abracadeira">
                <Abracadeira />
              </div>
              
              {/* Services */}
              <div ref={ultraSonsRef} id="ultrasons">
                <UltraSons />
              </div>
            </div>

            {/* Mobile: Show only selected category products */}
            <div className="d-block d-lg-none">
              {getProductsForCategory(selectedProduct).map((product, index) => (
                <div key={product.id} ref={product.ref} id={product.id}>
                  {product.component}
                </div>
              ))}
            </div>
          </Col>
        </Row>
        </Container>
      </Container>
      
      <Footer />
      <MobileBottomBar selectedProduct={selectedProduct} onProductChange={handleProductChange} />
    </div>
  )
}