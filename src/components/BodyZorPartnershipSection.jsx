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

        const ctx = gsap.context(() => {
            const allLayers = gsap.utils.toArray(stack.querySelectorAll('.zor-layer'));

            allLayers.forEach((layer, i) => {
                gsap.set(layer, {
                    xPercent: -50,
                    yPercent: -50,
                    y: INITIAL_Y_PX[i] ?? 0,
                    opacity: 1,
                });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: '+=80%',
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    /* Reduces edge jitter when scroll velocity is high (pairs with instant document scroll). */
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
        }, section);

        return () => ctx.revert();
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
                        <p className="zor-partnership-lead zor-partnership-lead--follow">
                            Intervalos de temperatura: [+2 °C a +8 °C] e [+15 °C a +25 °C]. Este kit é
                            composto por uma caixa exterior polimérica, um reforço com isolamento térmico
                            e acumuladores de frio que envolvem o(s) produto(s) a transportar.
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
