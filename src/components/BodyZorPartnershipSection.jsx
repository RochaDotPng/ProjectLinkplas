import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IMAGE_BASE = '/images';

/**
 * Deslocamento vertical em px (relativo ao centro do contentor), por ordem de LAYERS.
 * Positivo = mais abaixo, negativo = mais acima.
 * Estado inicial (caixa “fechada”) — ajusta para alinhar as artes umas às outras.
 */
const INITIAL_Y_PX = [130, 30, -50, -50, -20];

/**
 * Estado final (scroll no fim): mesma convenção que INITIAL_Y_PX.
 * A animação vai de INITIAL_Y_PX[i] → SPREAD_Y_PX[i].
 */
const SPREAD_Y_PX = [280, 90, -50, -170, -326];

/** Mobile: animação começa um pouco antes (antes do topo da secção alinhar com o topo do ecrã). */
const ZOR_SCROLL_START_MOBILE = 'top 88%';

const LAYERS = [
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
];

/** Índice em LAYERS por nota — o mesmo movimento vertical GSAP das imagens. */
const CALLOUTS = [
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
];

export default function BodyZorPartnershipSection() {
    const sectionRef = useRef(null);
    const stackRef = useRef(null);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setReducedMotion(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    useLayoutEffect(() => {
        if (reducedMotion) return undefined;

        const section = sectionRef.current;
        const stack = stackRef.current;
        if (!section || !stack) return undefined;

        const mm = gsap.matchMedia();

        const build = (pin, scrollStart = 'top top') => {
            const allLayers = gsap.utils.toArray(stack.querySelectorAll('.zor-layer'));
            const anchors = gsap.utils.toArray(stack.querySelectorAll('.zor-callout-anchor'));
            const callouts = gsap.utils.toArray(stack.querySelectorAll('.zor-callout'));

            allLayers.forEach((layer, i) => {
                gsap.set(layer, {
                    xPercent: -50,
                    yPercent: -50,
                    y: INITIAL_Y_PX[i] ?? 0,
                    opacity: 1,
                });
            });

            anchors.forEach((anchor) => {
                const i = parseInt(anchor.dataset.zorCalloutLayer, 10);
                gsap.set(anchor, {
                    xPercent: -50,
                    yPercent: -50,
                    y: INITIAL_Y_PX[i] ?? 0,
                });
            });

            callouts.forEach((el) => {
                gsap.set(el, { opacity: 0 });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: scrollStart,
                    end: '+=80%',
                    pin,
                    scrub: 1,
                    anticipatePin: pin ? 1 : 0,
                    fastScrollEnd: true,
                },
            });

            allLayers.forEach((layer, i) => {
                tl.to(
                    layer,
                    {
                        y: SPREAD_Y_PX[i],
                        duration: 1,
                        ease: 'none',
                    },
                    0
                );
            });

            anchors.forEach((anchor) => {
                const i = parseInt(anchor.dataset.zorCalloutLayer, 10);
                tl.to(
                    anchor,
                    {
                        y: SPREAD_Y_PX[i],
                        duration: 1,
                        ease: 'none',
                    },
                    0
                );
            });

            /* Fade in with the spread; first beats align with CaixaPlastica (plastic box) motion start. */
            tl.to(
                callouts,
                {
                    opacity: 1,
                    duration: 0.22,
                    stagger: 0.05,
                    ease: 'none',
                },
                0
            );
        };

        /* Pin/unpin is what jumps on mobile when the browser chrome resizes the viewport. */
        mm.add('(min-width: 992px)', () => {
            build(true, 'top top');
        });

        mm.add('(max-width: 991px)', () => {
            build(false, ZOR_SCROLL_START_MOBILE);
        });

        return () => mm.revert();
    }, [reducedMotion]);

    return (
        <section
            ref={sectionRef}
            className="zor-partnership-section"
            aria-labelledby="zor-partnership-heading"
        >
            <div className="zor-partnership-inner">
                <header className="zor-partnership-header">
                    <p className="zor-partnership-eyebrow">Parceria</p>
                    <h2 id="zor-partnership-heading" className="zor-partnership-title">
                        Linkplas × ZØR
                    </h2>
                </header>

                <div className="zor-partnership-row">
                    <div className="zor-partnership-copy">
                        <p className="zor-partnership-lead">
                            O kit isotérmico é adequado para todos os tipos de transporte de produtos
                            termossensíveis. Trata-se de uma solução fácil de utilizar, reutilizável e
                            qualificada até 20 horas.
                        </p>
                    </div>

                    <div
                        ref={stackRef}
                        className={`zor-layer-stack ${reducedMotion ? 'zor-layer-stack--static' : ''}`}
                    >
                        <div className="zor-layer-stack-scale">
                            {LAYERS.map((layer, index) => (
                                <img
                                    key={layer.src}
                                    src={layer.src}
                                    alt={layer.alt}
                                    className="zor-layer"
                                    style={{
                                        zIndex: layer.zIndex ?? index + 1,
                                        ...(reducedMotion
                                            ? {
                                                  transform: `translate(-50%, calc(-50% + ${SPREAD_Y_PX[index]}px))`,
                                              }
                                            : {}),
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
                                    style={
                                        reducedMotion
                                            ? {
                                                  transform: `translate(-50%, calc(-50% + ${SPREAD_Y_PX[layerIndex]}px))`,
                                              }
                                            : undefined
                                    }
                                    aria-hidden="true"
                                >
                                    <div className={`zor-callout zor-callout--${variant}`}>
                                        <span
                                            className={`zor-callout__chip${lines ? ' zor-callout__chip--twoline' : ''}`}
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
                </div>
            </div>
        </section>
    );
}
