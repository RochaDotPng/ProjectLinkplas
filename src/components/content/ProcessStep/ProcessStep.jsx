import PropTypes from 'prop-types';

// One step of a numbered process. Rendered as a list item: the steps are an ordered list.
export default function ProcessStep({ number, title, description, level: Heading = 'h3' }) {
  return (
    <li className="lp-process-step">
      <span className="lp-process-step__number" aria-hidden="true">{number}</span>
      <Heading className="lp-process-step__title">{title}</Heading>
      <p className="lp-process-step__description">{description}</p>
    </li>
  );
}

ProcessStep.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  level: PropTypes.elementType,
};
