import PropTypes from 'prop-types';

// A moment in the company's history. `current` marks today's entry in Azul Petróleo.
export default function TimelineItem({ year, title, description, current = false, children }) {
  return (
    <li className={`lp-timeline-item${current ? ' lp-timeline-item--current' : ''}`}>
      <span className="lp-timeline-item__rail" aria-hidden="true">
        <span className="lp-timeline-item__marker" />
        <span className="lp-timeline-item__line" />
      </span>
      <span className="lp-timeline-item__year">{year}</span>
      <span className="lp-timeline-item__title">{title}</span>
      {description && <span className="lp-timeline-item__description">{description}</span>}
      {children}
    </li>
  );
}

TimelineItem.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  current: PropTypes.bool,
  children: PropTypes.node,
};
