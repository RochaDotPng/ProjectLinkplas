import { Link } from 'react-router-dom';
import Eyebrow from '../../content/Eyebrow/Eyebrow';
import Button from '../../ui/Button/Button';
import Icon from '../../ui/Icon/Icon';
import BackgroundVideo from '../../ui/BackgroundVideo/BackgroundVideo';
import Logo from '../../brand/Logo/Logo';
import arrowRight from '../../../assets/icons/arrow-right-20.svg';
import { useHomeContent } from '../../../content/home';

// Home hero, from the Figma \`Hero\` component (Type=Home): copy on Azul Profundo, with the
// production video where the design has its photograph.
export default function HomeHero() {
  const { hero } = useHomeContent();

  return (
    <section className="lp-home-hero" aria-labelledby="lp-home-hero-title">
      <div className="container lp-home-hero__inner">
        <div className="lp-home-hero__content">
          <Eyebrow theme="dark">{hero.eyebrow}</Eyebrow>
          <h1 id="lp-home-hero-title" className="lp-home-hero__title">{hero.title}</h1>
          <p className="lp-home-hero__lead">{hero.lead}</p>
          <div className="lp-home-hero__actions">
            <Button
              as={Link}
              to={hero.primaryAction.to}
              variant="inverse"
              size="large"
              trailingIcon={<Icon src={arrowRight} />}
            >
              {hero.primaryAction.label}
            </Button>
            <Button as={Link} to={hero.secondaryAction.to} variant="accent" size="large">
              {hero.secondaryAction.label}
            </Button>
          </div>
        </div>
      </div>
      <div className="lp-home-hero__media">
        <BackgroundVideo src="/images/Hero.webm" className="lp-home-hero__video" />
        {/* The symbol is the official asset, used as in the design's "Symbol accent". The
            header already names the brand, so this one is decoration. */}
        <span className="lp-home-hero__symbol" aria-hidden="true">
          <Logo type="symbol" color="inverse" width={64} />
        </span>
      </div>
    </section>
  );
}
