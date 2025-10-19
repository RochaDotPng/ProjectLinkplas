import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsSidebar from "../components/ProductsSidebar";
import TupperLink from '../components/products-components/take_away/TupperLink';
import CaixaMedicamentos from '../components/products-components/farmacy/CaixaMedicamentos';
import Abracadeira from '../components/products-components/industry/Abracadeira';
import Tampa from '../components/products-components/industry/Tampa';
import Intercalar from '../components/products-components/industry/Intercalar';
import TampaVeio from '../components/products-components/industry/TampaVeio';
import Anilha from '../components/products-components/industry/Anilha';
import UltraSons from '../components/products-components/services/UltraSons';
import MobileBottomBar from '../components/MobileBottomBar';
import { Helmet } from 'react-helmet-async';

export default function Products() {
  let { parameter } = useParams();
  const [selectedProduct, setSelectedProduct] = useState('KeepyFarma');
  const [activeProduct, setActiveProduct] = useState('KeepyFarma');
  const [autoOpenSections, setAutoOpenSections] = useState({
    'Industria': false,
    'Servicos': false,
    'Take-Away': false
  });
  let navigate = useNavigate();
  
  // Refs for each product section
  const keepyFarmaRef = useRef(null);
  const keepyLinkRef = useRef(null);
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

  const handleProductChange = (product) => {
    setSelectedProduct(product);
    ChangeUrl(product);
    
    // Scroll to the product section
    const productRefs = {
      'KeepyFarma': keepyFarmaRef,
      'KeepyLink': keepyLinkRef,
      'Abracadeira': abracadeiraRef,
      'Tampa': tampaRef,
      'Intercalar': intercalarRef,
      'TampaVeio': tampaVeioRef,
      'Anilha': anilhaRef,
      'UltraSons': ultraSonsRef
    };
    
    const targetRef = productRefs[product];
    if (targetRef && targetRef.current) {
      const offsetTop = targetRef.current.offsetTop - 100; // Offset for header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Scroll detection to highlight active product and auto-open accordions
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header
      
      const productRefs = [
        { ref: keepyFarmaRef, id: 'KeepyFarma', section: 'Farmaceutica' },
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
        <link rel="canonical" href={pageMeta.url} />
      </Helmet>
      <Header />
      
      <Container fluid className="products-main-container">
        <Container>
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
            {/* KeepyFarma - First Product */}
            <div ref={keepyFarmaRef} id="keepyfarma">
              <CaixaMedicamentos />
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
          </Col>
        </Row>
        </Container>
      </Container>
      
      <Footer />
      <MobileBottomBar selectedProduct={selectedProduct} onProductChange={handleProductChange} />
    </div>
  )
}