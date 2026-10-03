import PropTypes from 'prop-types';
import Header from '../../Header';
import Footer from '../../Footer';
import CtaSection from '../CtaSection/CtaSection';
import { useSiteContent } from '../../../content/site';

// The frame every page shares: header, the main landmark the skip link targets, and footer.
// Pages end with the same call to action unless they place it themselves.
export default function PageLayout({ closingCta = true, children }) {
  const { closingCta: cta } = useSiteContent();

  return (
    <div>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        {children}
        {closingCta && <CtaSection title={cta.title} text={cta.text} action={cta.action} />}
      </main>
      <Footer />
    </div>
  );
}

PageLayout.propTypes = {
  closingCta: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
