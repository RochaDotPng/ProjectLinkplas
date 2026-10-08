import PageMeta from '../components/seo/PageMeta/PageMeta';
import PageLayout from '../components/sections/PageLayout/PageLayout';
import InteriorHero from '../components/sections/InteriorHero/InteriorHero';
import Section from '../components/content/Section/Section';
import SectionHeading from '../components/content/SectionHeading/SectionHeading';
import CheckList from '../components/content/CheckList/CheckList';
import Stat from '../components/cards/Stat/Stat';
import CertificationBadge from '../components/ui/CertificationBadge/CertificationBadge';
import { useCompanyContent } from '../content/company';

export default function Quality() {
  const { crumb, quality } = useCompanyContent();
  const { hero, certifications, policy, control, sustainability, social } = quality;

  return (
    <PageLayout>
      <PageMeta page="quality" />
      <InteriorHero crumbs={[{ label: crumb }]} current={hero.current} eyebrow={hero.eyebrow} title={hero.title} />

      <Section labelledBy="qualidade-certificacoes">
        <SectionHeading id="qualidade-certificacoes" title={certifications.title} description={certifications.text} />
        <div className="lp-stack">
          <CertificationBadge title={certifications.badge.title} description={certifications.badge.description} />
          <p className="lp-note">{certifications.since}</p>
        </div>
      </Section>

      <Section tone="subtle" labelledBy="qualidade-politica">
        <SectionHeading id="qualidade-politica" title={policy.title} />
        <div className="lp-prose lp-prose--lead">
          <p>{policy.intro}</p>
          <p>{policy.lead}</p>
          <ol>
            {policy.commitments.map((commitment) => (
              <li key={commitment}>{commitment}</li>
            ))}
          </ol>
        </div>
      </Section>

      <Section labelledBy="qualidade-controlo">
        <SectionHeading id="qualidade-controlo" title={control.title} />
        <CheckList items={control.items} />
      </Section>

      <Section tone="subtle" labelledBy="qualidade-sustentabilidade">
        <div className="lp-split">
          <div className="lp-stack">
            <SectionHeading id="qualidade-sustentabilidade" eyebrow={sustainability.eyebrow} title={sustainability.title} />
            <div className="lp-prose">
              {sustainability.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <Stat value={sustainability.stat.value} label={sustainability.stat.label} />
        </div>
      </Section>

      <Section labelledBy="qualidade-social">
        <div className="lp-split">
          <SectionHeading id="qualidade-social" eyebrow={social.eyebrow} title={social.title} description={social.text} />
          <div className="lp-media lp-media--contain">
            <img src={social.image} alt={social.imageAlt} loading="lazy" decoding="async" />
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
