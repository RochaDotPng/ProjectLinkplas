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
import { useCompanyContent } from '../content/company';

export default function About() {
  const { crumb, about } = useCompanyContent();
  const { hero, stats, history, purpose, values, team, people } = about;

  return (
    <PageLayout>
      <PageMeta page="about" />
      <InteriorHero
        crumbs={[{ label: crumb }]}
        current={hero.current}
        eyebrow={hero.eyebrow}
        title={hero.title}
        lead={hero.lead}
        image={hero.image}
      />

      <StatsBand label={stats.label} stats={stats.items} />

      <Section labelledBy="sobre-historia">
        <div className="lp-split lp-split--center">
          <SectionHeading id="sobre-historia" eyebrow={history.eyebrow} title={history.title} description={history.text} />
          <div className="lp-media">
            <img src={history.image.src} alt={history.image.alt} loading="lazy" decoding="async" />
          </div>
        </div>
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
      </Section>

      <Section tone="subtle">
        <div className="lp-split lp-split--center">
          <div className="lp-media">
            <img src={purpose.image.src} alt={purpose.image.alt} loading="lazy" decoding="async" />
          </div>
          <div className="lp-stack lp-stack--loose">
            {[purpose.mission, purpose.vision].map((block) => (
              <div key={block.title} className="lp-stack lp-stack--tight">
                <h2 className="lp-subheading">{block.title}</h2>
                <p className="lp-note">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section labelledBy="sobre-valores">
        <div className="lp-split lp-split--center">
          <SectionHeading id="sobre-valores" eyebrow={values.eyebrow} title={values.title} />
          <div className="lp-media">
            <img src={values.image.src} alt={values.image.alt} loading="lazy" decoding="async" />
          </div>
        </div>
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
          <div className="lp-media">
            <img src={team.photo} alt={team.photoAlt} loading="lazy" decoding="async" />
          </div>
        </div>
      </Section>

      <Section labelledBy="sobre-pessoas">
        <SectionHeading id="sobre-pessoas" title={people.title} />
        <ul className="lp-grid lp-grid--3">
          {people.people.map((person) => (
            <li key={person.name}>
              <TeamCard
                name={person.name}
                role={person.role}
                since={person.since}
                bio={person.bio}
                photo={person.photo}
              />
            </li>
          ))}
        </ul>
      </Section>
    </PageLayout>
  );
}
