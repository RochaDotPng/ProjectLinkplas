import { useEffect, useState } from 'react';
import IconButton from '../../ui/Button/IconButton';
import Icon from '../../ui/Icon/Icon';
import chevronUp from '../../../assets/icons/chevron-up-24.svg';
import { useSiteContent } from '../../../content/site';

const SHOW_AFTER = 300;

// Appears once the visitor has scrolled a little. While it is hidden it is out of the tab
// order too, so nobody lands on a button they cannot see.
export default function BackToTop() {
  const { backToTopLabel } = useSiteContent();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <IconButton
      className="lp-back-to-top"
      variant="accent"
      label={backToTopLabel}
      icon={<Icon src={chevronUp} size={24} />}
      hidden={!visible}
      onClick={() => window.scrollTo(0, 0)}
    />
  );
}
