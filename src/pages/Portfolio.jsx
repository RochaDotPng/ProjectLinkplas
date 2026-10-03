import PageMeta from '../components/seo/PageMeta/PageMeta';
import PageLayout from '../components/sections/PageLayout/PageLayout';
import InteriorHero from '../components/sections/InteriorHero/InteriorHero';
import Section from '../components/content/Section/Section';
import SectionHeading from '../components/content/SectionHeading/SectionHeading';
import CheckList from '../components/content/CheckList/CheckList';
import FeatureCard from '../components/cards/FeatureCard/FeatureCard';
import Stat from '../components/cards/Stat/Stat';
import TestimonialCard from '../components/cards/TestimonialCard/TestimonialCard';
import ContentPlaceholder from '../components/ui/ContentPlaceholder/ContentPlaceholder';
import ImagePlaceholder from '../components/ui/ImagePlaceholder/ImagePlaceholder';
import { usePartnersContent } from '../content/partners';
import { ROUTES } from '../content/routes';

export default function Portfolio() {
  const { crumb, portfolio } = usePartnersContent();
  const { hero, projects } = portfolio;

  return (
    <PageLayout>
      <PageMeta page="portfolio" />
      <InteriorHero
        crumbs={[{ label: crumb, to: ROUTES.partners }]}
        current={hero.eyebrow}
        eyebrow={hero.eyebrow}
        title={hero.title}
        lead={hero.lead}
      />

      {projects.map((project, index) => {
        const headingId = `projeto-${project.id}`;
        return (
          // Projects alternate between white and tinted bands so each reads as its own case.
          <Section key={project.id} tone={index % 2 ? 'subtle' : 'page'} labelledBy={headingId}>
            <div className="lp-split">
              <div className="lp-stack">
                <SectionHeading
                  id={headingId}
                  eyebrow={[project.client, project.period].filter(Boolean).join(' · ')}
                  title={project.title}
                  description={project.text}
                />
                {project.missing && <ContentPlaceholder>{project.missing}</ContentPlaceholder>}
                {project.stat && <Stat value={project.stat.value} label={project.stat.label} />}
                {project.benefits && <CheckList items={project.benefits} />}
              </div>
              <div className="lp-stack">
                <div className={`lp-media${project.image ? ' lp-media--contain' : ''}`}>
                  {project.image ? (
                    <img src={project.image} alt="" loading="lazy" decoding="async" />
                  ) : (
                    <ImagePlaceholder />
                  )}
                </div>
                {project.photo && <ContentPlaceholder>{project.photo}</ContentPlaceholder>}
              </div>
            </div>

            {project.features && (
              <ul className="lp-grid lp-grid--3">
                {project.features.map((feature) => (
                  <li key={feature.title}>
                    <FeatureCard title={feature.title} description={feature.text} icon={feature.icon} />
                  </li>
                ))}
              </ul>
            )}

            {project.testimonial && (
              <TestimonialCard
                quote={project.testimonial.quote}
                name={project.testimonial.name}
                role={project.testimonial.role}
              />
            )}
          </Section>
        );
      })}
    </PageLayout>
  );
}
