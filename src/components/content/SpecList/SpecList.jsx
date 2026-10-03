import PropTypes from 'prop-types';

// A short list of specifications (measurements, material…) shown as label over value.
// It is a live region, so a screen reader hears the new values when a size is chosen.
export default function SpecList({ items }) {
  return (
    <div aria-live="polite">
      <dl className="lp-spec-list">
        {items.map((item) => (
          <div key={item.key} className="lp-spec-list__item">
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

SpecList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.node.isRequired,
    })
  ).isRequired,
};
