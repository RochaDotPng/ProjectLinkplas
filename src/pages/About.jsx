import PageMeta from '../components/seo/PageMeta/PageMeta';
import PageLayout from '../components/sections/PageLayout/PageLayout';
import InteriorHero from '../components/sections/InteriorHero/InteriorHero';
import StatsBand from '../components/sections/StatsBand/StatsBand';
import Section from '../components/content/Section/Section';
import SectionHeading from '../components/content/SectionHeading/SectionHeading';
import TimelineItem from '../components/content/TimelineItem/TimelineItem';
import FeatureCard from '../components/cards/FeatureCard/FeatureCard';
import Stat from '../components/cards/Stat/Stat';
import TeamCard from '../components/cards/TeamCard/TeamCard';
import ContentPlaceholder from '../components/ui/ContentPlaceholder/ContentPlaceholder';
import ImagePlaceholder from '../components/ui/ImagePlaceholder/ImagePlaceholder';
import { useCompanyContent } from '../content/company';

export default function About() {
  const { crumb, about } = useCompanyContent();
  const { hero, stats, history, purpose, values, team, leadership } = about;

  return (
    <PageLayout>
      <PageMeta page="about" />
      <InteriorHero
        crumbs={[{ label: crumb }]}
        current={hero.current}
        eyebrow={hero.eyebrow}
        title={hero.title}
        lead={hero.lead}
      />

      <StatsBand label={stats.label} stats={stats.items} />

      <Section labelledBy="sobre-historia">
        <SectionHeading id="sobre-historia" eyebrow={history.eyebrow} title={history.title} description={history.text} />
        <ol className="lp-timeline">
          {history.timeline.map((entry) => (
            <TimelineItem
              key={entry.year}
              year={entry.year}
              title={entry.title}
              description={entry.description}
              current={entry.current}
            />
          ))}
        </ol>
        <ContentPlaceholder>{history.missing}</ContentPlaceholder>
      </Section>

      <Section tone="subtle">
        <div className="lp-split">
          {[purpose.mission, purpose.vision].map((block) => (
            <div key={block.title} className="lp-stack">
              <h2 className="lp-subheading">{block.title}</h2>
              <p className="lp-note">{block.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section labelledBy="sobre-valores">
        <SectionHeading id="sobre-valores" eyebrow={values.eyebrow} title={values.title} />
        <ul className="lp-grid lp-grid--4">
          {values.items.map((value) => (
            <li key={value.number}>
              <FeatureCard title={value.title} description={value.description} number={value.number} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="subtle" labelledBy="sobre-equipa">
        <div className="lp-split">
          <div className="lp-stack">
            <SectionHeading id="sobre-equipa" eyebrow={team.eyebrow} title={team.title} description={team.text} />
            <Stat value={team.stat.value} label={team.stat.label} />
          </div>
          <div className="lp-stack">
            <div className="lp-media">
              <ImagePlaceholder />
            </div>
            <ContentPlaceholder>{team.missing}</ContentPlaceholder>
          </div>
        </div>
      </Section>

      <Section labelledBy="sobre-lideranca">
        <SectionHeading id="sobre-lideranca" eyebrow={leadership.eyebrow} title={leadership.title} />
        <ul className="lp-grid lp-grid--4">
          {leadership.people.map((person) => (
            <li key={person.name}>
              <TeamCard name={person.name} role={person.role} since={person.since} bio={person.bio} />
            </li>
          ))}
        </ul>
        <ContentPlaceholder>{leadership.missing}</ContentPlaceholder>
      </Section>
    </PageLayout>
  );
}
