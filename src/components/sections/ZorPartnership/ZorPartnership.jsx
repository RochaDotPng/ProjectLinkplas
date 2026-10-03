import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../../content/SectionHeading/SectionHeading';
import { usePartnersContent } from '../../../content/partners';

gsap.registerPlugin(ScrollTrigger);

const IMAGE_BASE = '/images';

// Vertical offset in px from the centre of the stack, in the order of LAYERS. Positive is
// lower. This is the closed box the animation starts from.
const INITIAL_Y_PX = [130, 30, -50, -50, -20];

// Where each layer ends once the scroll has opened the kit.
const SPREAD_Y_PX = [280, 90, -50, -170, -326];

// On phones the section is not pinned, so the animation starts before it reaches the top.
const SCROLL_START_MOBILE = 'top 88%';

// Alt texts come from the content module, in this order.
const LAYERS = [
  { src: `${IMAGE_BASE}/CaixaPlastica.png`, zIndex: 3 },
  { src: `${IMAGE_BASE}/CaixaEsferovite.png`, zIndex: 1 },
  { src: `${IMAGE_BASE}/acumulador.png`, zIndex: 2 },
  { src: `${IMAGE_BASE}/TampaEsferovite.png`, zIndex: 4 },
  { src: `${IMAGE_BASE}/TampaPlastico.png`, zIndex: 5 },
];

// Each label follows one layer, with the same vertical movement.
const CALLOUTS = [
  { layerIndex: 0, variant: 'caixa' },
  { layerIndex: 4, variant: 'tampa' },
  { layerIndex: 2, variant: 'acumulador' },
];

// LinkPlas × ZØR: the isothermal kit opens into its parts as the visitor scrolls. With
// reduced motion the kit is shown already open, with its labels.
export default function ZorPartnership() {
  const { zor } = usePartnersContent();
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
      const layers = gsap.utils.toArray(stack.querySelectorAll('.lp-zor__layer'));
      const anchors = gsap.utils.toArray(stack.querySelectorAll('.lp-zor__anchor'));
      const callouts = gsap.utils.toArray(stack.querySelectorAll('.lp-zor__callout'));

      layers.forEach((layer, i) => {
        gsap.set(layer, { xPercent: -50, yPercent: -50, y: INITIAL_Y_PX[i] ?? 0, opacity: 1 });
      });

      anchors.forEach((anchor) => {
        const i = parseInt(anchor.dataset.layer, 10);
        gsap.set(anchor, { xPercent: -50, yPercent: -50, y: INITIAL_Y_PX[i] ?? 0 });
      });

      callouts.forEach((callout) => {
        gsap.set(callout, { opacity: 0 });
      });

      const timeline = gsap.timeline({
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

      layers.forEach((layer, i) => {
        timeline.to(layer, { y: SPREAD_Y_PX[i], duration: 1, ease: 'none' }, 0);
      });

      anchors.forEach((anchor) => {
        const i = parseInt(anchor.dataset.layer, 10);
        timeline.to(anchor, { y: SPREAD_Y_PX[i], duration: 1, ease: 'none' }, 0);
      });

      // The labels fade in as the kit starts to open.
      timeline.to(callouts, { opacity: 1, duration: 0.22, stagger: 0.05, ease: 'none' }, 0);
    };

    // Pinning jumps on phones when the browser's toolbar resizes the viewport, so only
    // desktop pins the section.
    mm.add('(min-width: 992px)', () => {
      build(true, 'top top');
    });

    mm.add('(max-width: 991px)', () => {
      build(false, SCROLL_START_MOBILE);
    });

    return () => mm.revert();
  }, [reducedMotion]);

  const spread = (index) =>
    reducedMotion ? { transform: `translate(-50%, calc(-50% + ${SPREAD_Y_PX[index]}px))` } : undefined;

  return (
    <section ref={sectionRef} className="lp-zor" aria-labelledby="zor-titulo">
      <div className="container lp-zor__inner">
        <SectionHeading id="zor-titulo" eyebrow={zor.eyebrow} title={zor.title} description={zor.lead} />

        <div ref={stackRef} className={`lp-zor__stack${reducedMotion ? ' lp-zor__stack--static' : ''}`}>
          <div className="lp-zor__scale">
            {LAYERS.map((layer, index) => (
              <img
                key={layer.src}
                src={layer.src}
                alt={zor.layers[index]}
                className="lp-zor__layer"
                style={{ zIndex: layer.zIndex, ...spread(index) }}
                loading="lazy"
                draggable={false}
              />
            ))}

            {/* The labels repeat what the images' alt texts say. */}
            {CALLOUTS.map(({ layerIndex, variant }) => {
              const label = zor.callouts[variant];
              const lines = Array.isArray(label) ? label : null;
              return (
                <div
                  key={variant}
                  className={`lp-zor__anchor lp-zor__anchor--${variant}`}
                  data-layer={layerIndex}
                  style={spread(layerIndex)}
                  aria-hidden="true"
                >
                  <div className="lp-zor__callout">
                    <span className={`lp-zor__chip${lines ? ' lp-zor__chip--twoline' : ''}`}>
                      {lines
                        ? lines.map((line) => <span key={line} className="lp-zor__chip-row">{line}</span>)
                        : label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
