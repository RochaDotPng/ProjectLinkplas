import PropTypes from 'prop-types';
import LogoLayers from './LogoLayers';
import { brandAsset, COLOR_SUFFIX } from './brandAssets';
import { BRAND_NAME } from '../../../content/site';

// Layer offsets as [top, right, bottom, left] in % of the lockup, from the Figma `Logo` component.
const FULL_INSETS = {
  default: { symbol: [0, 77.01, 4.4, 0], name: [0, -0.16, 37.05, 25.85], tagline: [79.06, -0.23, -1.03, 25.85] },
  inverse: { symbol: [0, 76.88, 4.4, 0], name: [0.23, 0, 37.05, 25.96], tagline: [79.17, -0.02, -1.03, 25.98] },
  mono: { symbol: [0, 76.99, 4.4, 0], name: [0.23, 0, 37.05, 25.96], tagline: [78.13, 0.02, 0, 25.94] },
  'mono-inverse': { symbol: [0, 76.99, 4.4, 0], name: [0.23, 0, 37.05, 25.96], tagline: [78.13, 0.02, 0, 25.94] },
};

const FULL_RATIO = '279.638 / 66.948';
const SYMBOL_RATIO = '32.178 / 32';

const SYMBOL_FILE = {
  default: 'LinkPlas_Simbolo_Cor',
  inverse: 'LinkPlas_Simbolo_Cor_Negativo',
  mono: 'LinkPlas_Simbolo_Mono_Positivo',
  'mono-inverse': 'LinkPlas_Simbolo_Mono_Negativo',
};

// The manual's digital minimums: 140px wide for the full logo, 24px for the symbol alone.
const MIN_WIDTH = { full: 140, symbol: 24 };

export default function Logo({ type = 'full', color = 'default', width, className = '' }) {
  const resolvedWidth = Math.max(width ?? MIN_WIDTH[type], MIN_WIDTH[type]);

  if (type === 'symbol') {
    return (
      <LogoLayers
        label={BRAND_NAME}
        width={resolvedWidth}
        aspectRatio={SYMBOL_RATIO}
        layers={[{ src: brandAsset(SYMBOL_FILE[color]), inset: [0, 0, 0, 0] }]}
        className={className}
      />
    );
  }

  const prefix = `LinkPlas_Logo_${COLOR_SUFFIX[color]}`;
  const insets = FULL_INSETS[color];

  return (
    <LogoLayers
      label={BRAND_NAME}
      width={resolvedWidth}
      aspectRatio={FULL_RATIO}
      layers={[
        { src: brandAsset(`${prefix}_Simbolo`), inset: insets.symbol },
        { src: brandAsset(`${prefix}_Nome`), inset: insets.name },
        { src: brandAsset(`${prefix}_Assinatura`), inset: insets.tagline },
      ]}
      className={className}
    />
  );
}

Logo.propTypes = {
  type: PropTypes.oneOf(['full', 'symbol']),
  color: PropTypes.oneOf(['default', 'inverse', 'mono', 'mono-inverse']),
  width: PropTypes.number,
  className: PropTypes.string,
};
