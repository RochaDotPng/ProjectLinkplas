import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import Icon from '../../ui/Icon/Icon';
import arrowRight from '../../../assets/icons/arrow-right-20.svg';

// The call to action that closes a page (CTA Section, Theme=Dark in Figma).
export default function CtaSection({ title, text, action, level: Heading = 'h2' }) {
  return (
    <section className="lp-cta" aria-labelledby="lp-cta-title">
      <div className="container lp-cta__inner">
        <div className="lp-cta__box">
          <div className="lp-cta__text">
            <Heading id="lp-cta-title" className="lp-cta__title">{title}</Heading>
            {text && <p className="lp-cta__description">{text}</p>}
          </div>
          <Button as={Link} to={action.to} variant="inverse" size="large" trailingIcon={<Icon src={arrowRight} />}>
            {action.label}
          </Button>
        </div>
      </div>
    </section>
  );
}

CtaSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  action: PropTypes.shape({
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }).isRequired,
  level: PropTypes.elementType,
};
