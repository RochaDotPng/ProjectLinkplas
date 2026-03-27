import { useMemo } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

/**
 * E-Pharma static showcase (no ScrollTrigger / no pin).
 * Reuses the same visuals + labels as the ZØR partnership section,
 * but keeps everything at its final (spread) positions.
 */
export default function EPharma() {
  const navigate = useNavigate();
  const IMAGE_BASE = '/images';

  const SPREAD_Y_PX = useMemo(() => [280, 90, -50, -170, -326], []);

  const LAYERS = useMemo(
    () => [
      {
        src: `${IMAGE_BASE}/CaixaPlastica.png`,
        alt: 'Caixa de farmácia Linkplas em plástico resistente',
        zIndex: 3,
      },
      {
        src: `${IMAGE_BASE}/CaixaEsferovite.png`,
        alt: 'Inserção em esferovite ZØR para conservação térmica',
        zIndex: 1,
      },
      {
        src: `${IMAGE_BASE}/acumulador.png`,
        alt: 'Acumulador para manutenção de baixas temperaturas',
        zIndex: 2,
      },
      {
        src: `${IMAGE_BASE}/TampaEsferovite.png`,
        alt: 'Tampa do invólucro em esferovite',
        zIndex: 4,
      },
      {
        src: `${IMAGE_BASE}/TampaPlastico.png`,
        alt: 'Tampa exterior da caixa de farmácia',
        zIndex: 5,
      },
    ],
    []
  );

  const CALLOUTS = useMemo(
    () => [
      {
        layerIndex: 0,
        variant: 'caixa',
        lines: ['01. Caixa exterior', 'plástica com Tampa'],
      },
      {
        layerIndex: 4,
        variant: 'tampa',
        label: '02. Reforço com isolamento térmico',
      },
      {
        layerIndex: 2,
        variant: 'acumulador',
        label: '03. Acumuladores',
      },
    ],
    []
  );

  return (
    <section
      className="zor-partnership-section epharma-product-section"
      aria-label="E-Pharma"
    >
      <div className="zor-partnership-inner">
        <header className="zor-partnership-header epharma-header">
          {/*<p className="zor-partnership-eyebrow">Farmacêutica</p>*/}
          <h2 className="zor-partnership-title">e-Pharma</h2>
        </header>

        <div className="zor-partnership-row">
        <div className="zor-layer-stack zor-layer-stack--static">
            <div className="zor-layer-stack-scale">
              {LAYERS.map((layer, index) => (
                <img
                  key={layer.src}
                  src={layer.src}
                  alt={layer.alt}
                  className="zor-layer"
                  style={{
                    zIndex: layer.zIndex ?? index + 1,
                    // Final "spread" position (same math as reducedMotion in BodyZorPartnershipSection).
                    transform: `translate(-50%, calc(-50% + ${SPREAD_Y_PX[index]}px))`,
                  }}
                  loading="lazy"
                  draggable={false}
                />
              ))}

              {CALLOUTS.map(({ layerIndex, variant, label, lines }) => (
                <div
                  key={variant}
                  className={`zor-callout-anchor zor-callout-anchor--${variant}`}
                  data-zor-callout-layer={layerIndex}
                  style={{
                    transform: `translate(-50%, calc(-50% + ${SPREAD_Y_PX[layerIndex]}px))`,
                  }}
                  aria-hidden="true"
                >
                  <div className={`zor-callout zor-callout--${variant}`}>
                    <span
                      className={`zor-callout__chip${
                        lines ? ' zor-callout__chip--twoline' : ''
                      }`}
                    >
                      {lines
                        ? lines.map((line) => (
                            <span key={line} className="zor-callout__chip-row">
                              {line}
                            </span>
                          ))
                        : label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="zor-partnership-copy">
            <p className="zor-partnership-lead">
              O kit isotérmico é adequado para todos os tipos de transporte de produtos
              termossensíveis. Trata-se de uma solução fácil de utilizar, reutilizável e
              qualificada até 20 horas.
            </p>
            <p className="zor-partnership-lead">
            Intervalos de temperatura possíveis: [-21 ºC]; [+2 ºC a +8 ºC] e
            [+15 ºC a +25 ºC].
            </p>
            <br></br>
            <p className="zor-partnership-lead">
              O Kit Isotérmico é adequado para todos os tipos de transporte de produtos
              termossensíveis. Trata-se de uma solução fácil de utilizar, reutilizável e qualificada até 20
              horas. Intervalos de temperatura: [+2 ºC a +8 ºC] e [+15 ºC a +25 ºC].Este kit é composto
              por uma caixa exterior polimérica, um reforço com isolamento térmico e acumuladores
              de frio que envolvem o(s) produto(s) a transportar.
            </p>
            <div className="product-actions mt-4">
              <Button onClick={() => navigate('/Contacts')} className="p-3 me-3">
                Pedir cotação
              </Button>
              <Button
                href="../files/ZØR_LINKPLAS_Kit.pdf"
                download
                variant="secondary"
                className="p-3 btn-secondary text-white"
              >
                <span>Descarregar</span>
                <i className="text-white ms-2 bi bi-download"></i>
              </Button>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

