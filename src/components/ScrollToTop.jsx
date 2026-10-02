import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll position on route changes. Hash-only updates are ignored so in-page
 * anchors can still scroll, and so are changes that ask to stay in place with
 * `state.keepScroll` (a filter or a size selection that only rewrites the query).
 */
export default function ScrollToTop() {
  const location = useLocation();
  const keepScroll = Boolean(location.state?.keepScroll);

  useEffect(() => {
    if (!keepScroll) window.scrollTo(0, 0);
    // `keepScroll` describes the navigation that changed the address, so it is read, not watched.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.search]);

  return null;
}
