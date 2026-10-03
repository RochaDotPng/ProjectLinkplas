import PageMeta from '../components/seo/PageMeta/PageMeta';
import PageLayout from '../components/sections/PageLayout/PageLayout';
import HomeHero from '../components/sections/HomeHero/HomeHero';
import SectorShowcase from '../components/sections/SectorShowcase/SectorShowcase';
import StatsBand from '../components/sections/StatsBand/StatsBand';
import CtaSection from '../components/sections/CtaSection/CtaSection';
import LogoStrip from '../components/sections/LogoStrip/LogoStrip';
import Section from '../components/content/Section/Section';
import SectionHeading from '../components/content/SectionHeading/SectionHeading';
import ProcessStep from '../components/content/ProcessStep/ProcessStep';
import StandaloneLink from '../components/ui/StandaloneLink/StandaloneLink';
import { useHomeContent } from '../content/home';
import { useLogoStripItems } from '../content/partners';
import { useSiteContent } from '../content/site';

export default function Home() {
  const { sectors, stats, process, logoStrip } = useHomeContent();
  const { closingCta } = useSiteContent();
  const logos = useLogoStripItems();

  return (
    // The call to action sits mid-page here, as in the design, so the layout adds none.
    <PageLayout closingCta={false}>
      <PageMeta page="home" />
      <HomeHero />

      <Section labelledBy="setores-titulo">
        <SectionHeading
          id="setores-titulo"
          eyebrow={sectors.eyebrow}
          title={sectors.title}
          description={sectors.description}
        />
        <SectorShowcase items={sectors.items} menuLabel={sectors.eyebrow} />
      </Section>

      <StatsBand label={stats.label} stats={stats.items} />
      <CtaSection title={closingCta.title} text={closingCta.text} action={closingCta.action} />

      <Section labelledBy="processo-titulo">
        <SectionHeading id="processo-titulo" eyebrow={process.eyebrow} title={process.title} />
        <ol className="lp-process-steps">
          {process.steps.map((step) => (
            <ProcessStep key={step.number} number={step.number} title={step.title} description={step.description} />
          ))}
        </ol>
        <StandaloneLink to={process.more.to}>{process.more.label}</StandaloneLink>
      </Section>

      <LogoStrip title={logoStrip.title} items={logos} />
    </PageLayout>
  );
}
