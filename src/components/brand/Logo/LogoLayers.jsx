import PropTypes from 'prop-types';

const toInset = (values) => values.map((value) => (value === 0 ? '0' : `${value}%`)).join(' ');

// Stacks the exported layers at the offsets Figma defines, so the lockup is never redrawn.
export default function LogoLayers({ label, width, aspectRatio, layers, className = '' }) {
  return (
    <span
      className={`lp-logo ${className}`.trim()}
      style={{ width: `${width}px`, aspectRatio }}
      role="img"
      aria-label={label}
    >
      {layers.map(({ src, inset, innerInset }) => (
        <span key={src} className="lp-logo__layer" style={{ inset: toInset(inset) }}>
          {innerInset ? (
            <span className="lp-logo__layer" style={{ inset: toInset(innerInset) }}>
              <img src={src} alt="" />
            </span>
          ) : (
            <img src={src} alt="" />
          )}
        </span>
      ))}
    </span>
  );
}

LogoLayers.propTypes = {
  label: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  aspectRatio: PropTypes.string.isRequired,
  layers: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      inset: PropTypes.arrayOf(PropTypes.number).isRequired,
      innerInset: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
  className: PropTypes.string,
};
