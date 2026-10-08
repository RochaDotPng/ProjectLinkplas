import PropTypes from 'prop-types';
import Breadcrumb from '../../navigation/Breadcrumb/Breadcrumb';
import Eyebrow from '../../content/Eyebrow/Eyebrow';
import { useSiteContent } from '../../../content/site';
import { ROUTES } from '../../../content/routes';

// Top of an inner page (Hero, Type=Interior in Figma): breadcrumb, eyebrow, the page's h1
// and one line. `crumbs` are the pages between Início and this one; `children` go below
// the line (a logo, a button). With an `image`, the text shares the row with a photograph.
export default function InteriorHero({ crumbs = [], current, eyebrow, title, lead, image, children }) {
  const { breadcrumbLabel, homeCrumb } = useSiteContent();

  const content = (
    <div className="lp-interior-hero__content">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className="lp-interior-hero__title">{title}</h1>
      {lead && <p className="lp-interior-hero__lead">{lead}</p>}
      {children}
    </div>
  );

  return (
    <div className="lp-interior-hero">
      <div className="container lp-interior-hero__inner">
        <Breadcrumb
          label={breadcrumbLabel}
          items={[{ label: homeCrumb, to: ROUTES.home }, ...crumbs, { label: current ?? title }]}
        />
        {image ? (
          <div className="lp-interior-hero__row">
            {content}
            <div className={`lp-interior-hero__media lp-interior-hero__media--${image.position ?? 'center'}`}>
              <img src={image.src} alt={image.alt} />
            </div>
          </div>
        ) : (
          content
        )}
      </div>
    </div>
  );
}

InteriorHero.propTypes = {
  crumbs: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string.isRequired, to: PropTypes.string })),
  current: PropTypes.string,
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  lead: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    // Which side of the photograph to keep when the frame crops it.
    position: PropTypes.oneOf(['left', 'center', 'right']),
  }),
  children: PropTypes.node,
};
