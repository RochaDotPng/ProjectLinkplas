import PropTypes from 'prop-types';
import Breadcrumb from '../../navigation/Breadcrumb/Breadcrumb';
import Eyebrow from '../../content/Eyebrow/Eyebrow';
import { useSiteContent } from '../../../content/site';
import { ROUTES } from '../../../content/routes';

// Top of an inner page (Hero, Type=Interior in Figma): breadcrumb, eyebrow, the page's h1
// and one line. `crumbs` are the pages between Início and this one; `children` go below
// the line (a logo, a button).
export default function InteriorHero({ crumbs = [], current, eyebrow, title, lead, children }) {
  const { breadcrumbLabel, homeCrumb } = useSiteContent();

  return (
    <div className="lp-interior-hero">
      <div className="container lp-interior-hero__inner">
        <Breadcrumb
          label={breadcrumbLabel}
          items={[{ label: homeCrumb, to: ROUTES.home }, ...crumbs, { label: current ?? title }]}
        />
        <div className="lp-interior-hero__content">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="lp-interior-hero__title">{title}</h1>
          {lead && <p className="lp-interior-hero__lead">{lead}</p>}
          {children}
        </div>
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
  children: PropTypes.node,
};
