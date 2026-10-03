import PropTypes from 'prop-types';

// A key figure. The value and its label read as one sentence ("14 anos de atividade contínua").
export default function Stat({ value, label }) {
  return (
    <p className="lp-stat">
      <span className="lp-stat__value">{value}</span>{' '}
      <span className="lp-stat__label">{label}</span>
    </p>
  );
}

Stat.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
