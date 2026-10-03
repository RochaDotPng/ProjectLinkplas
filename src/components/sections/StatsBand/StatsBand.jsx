import PropTypes from 'prop-types';
import Stat from '../../cards/Stat/Stat';

// A band of key figures: 2×2 on phones, one row from desktop.
export default function StatsBand({ label, stats }) {
  return (
    <section className="lp-stats-band" aria-label={label}>
      <ul className="container lp-stats-band__list">
        {stats.map((stat) => (
          <li key={stat.label}>
            <Stat value={stat.value} label={stat.label} />
          </li>
        ))}
      </ul>
    </section>
  );
}

StatsBand.propTypes = {
  label: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
