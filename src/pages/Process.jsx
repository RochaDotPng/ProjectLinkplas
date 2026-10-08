import PageMeta from '../components/seo/PageMeta/PageMeta';
import PageLayout from '../components/sections/PageLayout/PageLayout';
import InteriorHero from '../components/sections/InteriorHero/InteriorHero';
import Section from '../components/content/Section/Section';
import SectionHeading from '../components/content/SectionHeading/SectionHeading';
import ProcessStep from '../components/content/ProcessStep/ProcessStep';
import CheckList from '../components/content/CheckList/CheckList';
import FeatureCard from '../components/cards/FeatureCard/FeatureCard';
import Stat from '../components/cards/Stat/Stat';
import Badge from '../components/ui/Badge/Badge';
import StandaloneLink from '../components/ui/StandaloneLink/StandaloneLink';
import { useCompanyContent } from '../content/company';

export default function Process() {
  const { crumb, process } = useCompanyContent();
  const { hero, development, injection, finishing } = process;

  return (
    <PageLayout>
      <PageMeta page="process" />
      <InteriorHero crumbs={[{ label: crumb }]} current={hero.current} eyebrow={hero.eyebrow} title={hero.title} />

      <Section labelledBy="processo-desenvolvimento">
        <SectionHeading id="processo-desenvolvimento" eyebrow={development.eyebrow} title={development.title} />
        <ol className="lp-process-steps">
          {development.steps.map((step) => (
            <ProcessStep key={step.number} number={step.number} title={step.title} description={step.description} />
          ))}
        </ol>
        <CheckList items={development.benefits} />
      </Section>

      <Section tone="subtle" labelledBy="processo-injecao">
        <SectionHeading id="processo-injecao" eyebrow={injection.eyebrow} title={injection.title} />
        <div className="lp-split">
          <Stat value={injection.stat.value} label={injection.stat.label} />
          <div className="lp-stack">
            <h3 className="lp-subheading">{injection.materialsTitle}</h3>
            <ul className="lp-tag-list">
              {injection.materials.map((material) => (
                <li key={material}><Badge size="medium">{material}</Badge></li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="lp-grid lp-grid--3">
          {injection.cards.map((card) => (
            <li key={card.title}>
              <FeatureCard title={card.title} description={card.description} icon={card.icon} />
            </li>
          ))}
        </ul>
        <StandaloneLink to={injection.link.to}>{injection.link.label}</StandaloneLink>
      </Section>

      <Section labelledBy="processo-acabamento">
        <div className="lp-split">
          <div className="lp-stack">
            <SectionHeading
              id="processo-acabamento"
              eyebrow={finishing.eyebrow}
              title={finishing.title}
              description={finishing.text}
            />
            <CheckList items={finishing.items} />
            <p className="lp-note">{finishing.note}</p>
            <StandaloneLink to={finishing.link.to}>{finishing.link.label}</StandaloneLink>
          </div>
          <div className="lp-media">
            <img src={finishing.image} alt={finishing.imageAlt} loading="lazy" decoding="async" />
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
