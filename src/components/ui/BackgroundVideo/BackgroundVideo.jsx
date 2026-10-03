import { useState } from 'react';
import PropTypes from 'prop-types';

// A muted, looping video used as decoration. It says nothing a visitor needs, so it is hidden
// from assistive technology. It only starts on its own when the visitor has not asked for
// reduced motion; otherwise it shows its first frame. There is no pause button, by the
// client's choice (see the decisions log in CLAUDE.md).
export default function BackgroundVideo({ src, className = '' }) {
  const [startsPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  return (
    <div className={`lp-background-video ${className}`.trim()}>
      <video
        className="lp-background-video__media"
        src={src}
        autoPlay={startsPlaying}
        muted
        loop
        playsInline
        preload={startsPlaying ? 'auto' : 'metadata'}
        aria-hidden="true"
      />
    </div>
  );
}

BackgroundVideo.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};
