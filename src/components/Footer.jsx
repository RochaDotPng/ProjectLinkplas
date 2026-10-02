import { Link } from 'react-router-dom';
import Logo from './brand/Logo/Logo';
import CertificationBadge from './ui/CertificationBadge/CertificationBadge';
import Icon from './ui/Icon/Icon';
import mapPin from '../assets/icons/map-pin-16.svg';
import phone from '../assets/icons/phone-16.svg';
import mail from '../assets/icons/mail-16.svg';
import { useSiteContent } from '../content/site';

export default function Footer() {
  const { tagline, certification, columns, contacts, legal } = useSiteContent().footer;

  return (
    // The id is read by the scroll-to-top button in App.jsx to stay clear of the footer.
    <footer id="footerComponent" className="lp-footer">
      <div className="container lp-footer__inner">
        <div className="lp-footer__top">
          <div className="lp-footer__brand">
            <Logo color="inverse" />
            <p className="lp-footer__tagline">{tagline}</p>
            <CertificationBadge title={certification.title} description={certification.description} />
          </div>

          <div className="lp-footer__columns">
            {columns.map((column) => (
              <nav key={column.heading} className="lp-footer__column" aria-label={column.heading}>
                <h2 className="lp-footer__heading">{column.heading}</h2>
                <ul className="lp-footer__list">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link className="lp-footer__link" to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="lp-footer__column">
              <h2 className="lp-footer__heading">{contacts.heading}</h2>
              <address className="lp-footer__list">
                <span className="lp-footer__contact">
                  <Icon src={mapPin} size={16} />
                  {contacts.address}
                </span>
                <a className="lp-footer__link lp-footer__contact" href={contacts.phone.href}>
                  <Icon src={phone} size={16} />
                  {contacts.phone.label}
                </a>
                <a className="lp-footer__link lp-footer__contact" href={contacts.email.href}>
                  <Icon src={mail} size={16} />
                  {contacts.email.label}
                </a>
              </address>
              <ul className="lp-footer__social">
                {contacts.social.map((profile) => (
                  <li key={profile.label}>
                    <a className="lp-footer__link" href={profile.href} target="_blank" rel="noopener noreferrer">
                      {profile.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lp-footer__legal">
          <p className="lp-footer__copyright">© {new Date().getFullYear()} {legal.copyright}</p>
          <ul className="lp-footer__legal-links">
            {legal.links.map((link) => (
              <li key={link.label}>
                <a className="lp-footer__link" href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
