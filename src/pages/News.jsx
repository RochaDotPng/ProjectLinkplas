import PageMeta from '../components/seo/PageMeta/PageMeta';
import PageLayout from '../components/sections/PageLayout/PageLayout';
import InteriorHero from '../components/sections/InteriorHero/InteriorHero';
import Section from '../components/content/Section/Section';
import NewsCard from '../components/cards/NewsCard/NewsCard';
import { useNews } from '../content/news';
import { useSiteContent } from '../content/site';

export default function News() {
  const { hero, readPost, posts } = useNews();
  const { newTabLabel } = useSiteContent();

  return (
    <PageLayout>
      <PageMeta page="news" />
      <InteriorHero current={hero.eyebrow} eyebrow={hero.eyebrow} title={hero.title} />

      <Section>
        <ul className="lp-grid lp-grid--3">
          {posts.map((post) => (
            <li key={post.url}>
              <NewsCard post={post} linkLabel={readPost} newTabLabel={newTabLabel} />
            </li>
          ))}
        </ul>
      </Section>
    </PageLayout>
  );
}
