import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll position on route changes. Hash-only updates are ignored so
 * in-page anchors (e.g. /Products/Farmaceutica#keepyfarma) can still scroll.
 */
export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  return null;
}
