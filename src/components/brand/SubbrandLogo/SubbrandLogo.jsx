import PropTypes from 'prop-types';
import LogoLayers from '../Logo/LogoLayers';
import { brandAsset, COLOR_SUFFIX } from '../Logo/brandAssets';

// Natural size and layer offsets ([top, right, bottom, left] in %) from the Figma `Logo / Submarca` component.
const SUBBRANDS = {
  thermalink: {
    name: 'ThermaLink',
    size: [275.409, 32.708],
    symbol: [0, 88.31, 2.16, 0],
    wordmark: [0.46, 0, 0, 13.27],
    monoSymbol: [-1.16, -1.16, 0, 0],
  },
  tupperlink: {
    name: 'TupperLink',
    size: [263.152, 41.537],
    symbol: [0, 87.77, 22.96, 0],
    wordmark: [0, 0, 0, 13.89],
    monoSymbol: [-1.16, -1.16, 0, 0],
  },
  pharmalink: {
    name: 'PharmaLink',
    size: [273.219, 32.665],
    symbol: [0, 88.22, 2.04, 0],
    wordmark: [0.45, 0, 0, 13.36],
    monoSymbol: [-1.15, -1.15, 0, 0],
  },
  // FactoryLink's mono layers are positioned directly, with no inner offset.
  factorylink: {
    name: 'FactoryLink',
    size: [275.409, 32.708],
    symbol: [0, 88.31, 2.16, 0],
    wordmark: [0, 1.45, -26.03, 13.27],
    byColor: {
      mono: { wordmark: [-0.03, 1.45, -26, 13.27] },
      'mono-inverse': { symbol: [0.89, 88.38, 1.27, -0.07] },
    },
  },
};

// The symbol is 32px tall in every lockup at natural size, whatever the wordmark's descenders add.
const NATURAL_SYMBOL_HEIGHT = 32;

export default function SubbrandLogo({ brand, color = 'default', symbolHeight = NATURAL_SYMBOL_HEIGHT, className = '' }) {
  const { byColor, ...base } = SUBBRANDS[brand];
  const { name, size, symbol, wordmark, monoSymbol } = { ...base, ...byColor?.[color] };
  const [naturalWidth, naturalHeight] = size;
  const prefix = `${name}_Logo_${COLOR_SUFFIX[color]}`;
  const isMono = color === 'mono' || color === 'mono-inverse';

  return (
    <LogoLayers
      label={name}
      width={(naturalWidth * symbolHeight) / NATURAL_SYMBOL_HEIGHT}
      aspectRatio={`${naturalWidth} / ${naturalHeight}`}
      layers={[
        { src: brandAsset(`${prefix}_Simbolo`), inset: symbol, innerInset: isMono ? monoSymbol : undefined },
        { src: brandAsset(`${prefix}_Nome`), inset: wordmark },
      ]}
      className={className}
    />
  );
}

SubbrandLogo.propTypes = {
  brand: PropTypes.oneOf(Object.keys(SUBBRANDS)).isRequired,
  color: PropTypes.oneOf(['default', 'inverse', 'mono', 'mono-inverse']),
  symbolHeight: PropTypes.number,
  className: PropTypes.string,
};
