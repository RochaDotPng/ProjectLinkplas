import PropTypes from 'prop-types';

// The first cell of each row names the row, so it is a row header for screen readers.
export default function SpecTable({ caption, columns, rows }) {
  // Two columns is the Figma "Característica / Valor" layout, which wraps and never scrolls.
  const isPairs = columns.length === 2;
  // A wider table scrolls inside its wrapper, so the wrapper has to be reachable by keyboard.
  const scrollRegion = isPairs ? {} : { role: 'region', 'aria-label': caption, tabIndex: 0 };

  return (
    <div className={`lp-spec-table${isPairs ? ' lp-spec-table--pairs' : ''}`} {...scrollRegion}>
      <table className="lp-spec-table__table">
        <caption className="visually-hidden">{caption}</caption>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, ...values]) => (
            <tr key={name}>
              <th scope="row">{name}</th>
              {values.map((value, index) => (
                <td key={columns[index + 1]}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

SpecTable.propTypes = {
  caption: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired,
};
