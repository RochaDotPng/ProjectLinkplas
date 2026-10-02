// Official vectors exported from the Figma `Logo` and `Logo / Submarca` components.
// File names follow the brand manual: [Marca]_Logo_[Cor|Mono]_[Positivo|Negativo]_[camada].svg

const files = import.meta.glob('../../../assets/brand/*.svg', { eager: true, import: 'default' });

export const COLOR_SUFFIX = {
  default: 'Cor_Positivo',
  inverse: 'Cor_Negativo',
  mono: 'Mono_Positivo',
  'mono-inverse': 'Mono_Negativo',
};

export function brandAsset(name) {
  return files[`../../../assets/brand/${name}.svg`];
}
