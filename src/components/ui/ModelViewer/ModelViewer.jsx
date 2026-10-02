import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import IconButton from '../Button/IconButton';
import plus from '../../../assets/icons/plus-24.svg';
import minus from '../../../assets/icons/minus-24.svg';

const supportsWebGl = () => {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
};

// Interactive 3D preview (rotate and zoom). The viewer library is large, so it is only
// downloaded when the preview is about to be seen; until then, and wherever WebGL is
// missing, `fallback` is shown instead.
export default function ModelViewer({ src, alt, labels, fallback }) {
  const container = useRef(null);
  const viewer = useRef(null);
  const [status, setStatus] = useState('waiting');

  useEffect(() => {
    if (!supportsWebGl()) {
      setStatus('unavailable');
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        import('@google/model-viewer').then(
          () => setStatus('ready'),
          () => setStatus('unavailable')
        );
      },
      { rootMargin: '200px' }
    );
    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  // The viewer zooms on every wheel event, which would trap the page scroll while the pointer
  // is over it. Only a pinch on a trackpad (reported as ctrl + wheel) is let through; the
  // buttons, touch pinch and the keyboard cover zooming otherwise.
  useEffect(() => {
    const node = container.current;
    const keepPageScroll = (event) => {
      if (!event.ctrlKey) event.stopPropagation();
    };
    node.addEventListener('wheel', keepPageScroll, { capture: true });
    return () => node.removeEventListener('wheel', keepPageScroll, { capture: true });
  }, []);

  return (
    <div className="lp-model-viewer">
      <div ref={container} className="lp-model-viewer__stage">
        {status === 'ready' ? (
          <>
            <model-viewer
              ref={viewer}
              src={src}
              alt={alt}
              camera-controls=""
              touch-action="pan-y"
              interaction-prompt="none"
              camera-orbit="-35deg 65deg auto"
              shadow-intensity="0.6"
              shadow-softness="1"
            />
            <div className="lp-model-viewer__controls">
              <IconButton
                variant="secondary"
                size="small"
                label={labels.zoomIn}
                icon={<Icon src={plus} />}
                onClick={() => viewer.current?.zoom(2)}
              />
              <IconButton
                variant="secondary"
                size="small"
                label={labels.zoomOut}
                icon={<Icon src={minus} />}
                onClick={() => viewer.current?.zoom(-2)}
              />
            </div>
          </>
        ) : (
          fallback
        )}
      </div>
      {/* Shown while the viewer loads too, so the page does not shift when it appears. */}
      {status !== 'unavailable' && <p className="lp-model-viewer__hint">{labels.hint}</p>}
    </div>
  );
}

ModelViewer.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  labels: PropTypes.shape({
    hint: PropTypes.string.isRequired,
    zoomIn: PropTypes.string.isRequired,
    zoomOut: PropTypes.string.isRequired,
  }).isRequired,
  fallback: PropTypes.node.isRequired,
};
