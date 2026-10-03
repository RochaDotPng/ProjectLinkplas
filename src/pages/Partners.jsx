import PageMeta from '../components/seo/PageMeta/PageMeta';
import PageLayout from '../components/sections/PageLayout/PageLayout';
import InteriorHero from '../components/sections/InteriorHero/InteriorHero';
import ZorPartnership from '../components/sections/ZorPartnership/ZorPartnership';
import Section from '../components/content/Section/Section';
import SectionHeading from '../components/content/SectionHeading/SectionHeading';
import QuoteBlock from '../components/content/QuoteBlock/QuoteBlock';
import PartnerCard from '../components/cards/PartnerCard/PartnerCard';
import ContentPlaceholder from '../components/ui/ContentPlaceholder/ContentPlaceholder';
import ImagePlaceholder from '../components/ui/ImagePlaceholder/ImagePlaceholder';
import StandaloneLink from '../components/ui/StandaloneLink/StandaloneLink';
import { usePartnersContent } from '../content/partners';

export default function Partners() {
  const { crumb, hero, ecocatch, list, referral, partners } = usePartnersContent();

  return (
    <PageLayout>
      <PageMeta page="partners" />
      <InteriorHero current={crumb} eyebrow={hero.eyebrow} title={hero.title} lead={hero.lead} />

      <ZorPartnership />

      <Section tone="subtle" labelledBy="parcerias-ecocatch">
        <div className="lp-split">
          <div className="lp-stack">
            <SectionHeading
              id="parcerias-ecocatch"
              eyebrow={ecocatch.eyebrow}
              title={ecocatch.title}
              description={ecocatch.text}
            />
            <StandaloneLink to={ecocatch.action.to}>{ecocatch.action.label}</StandaloneLink>
          </div>
          <div className="lp-stack">
            <div className="lp-media">
              <ImagePlaceholder />
            </div>
            <ContentPlaceholder>{ecocatch.missing}</ContentPlaceholder>
          </div>
        </div>
      </Section>

      <Section labelledBy="parcerias-lista">
        <SectionHeading id="parcerias-lista" eyebrow={list.eyebrow} title={list.title} description={list.description} />
        <ul className="lp-grid lp-grid--4">
          {partners.map((partner) => (
            <li key={partner.id}>
              <PartnerCard name={partner.name} logo={partner.logo} line={partner.line} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="subtle" labelledBy="parcerias-recomendacao">
        <SectionHeading
          id="parcerias-recomendacao"
          eyebrow={referral.eyebrow}
          title={referral.title}
          description={referral.text}
        />
        <QuoteBlock quote={referral.quote} author={referral.author} />
      </Section>
    </PageLayout>
  );
}
