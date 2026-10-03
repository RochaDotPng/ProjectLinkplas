import PropTypes from 'prop-types';
import Badge from '../../ui/Badge/Badge';
import Icon from '../../ui/Icon/Icon';
import ImagePlaceholder from '../../ui/ImagePlaceholder/ImagePlaceholder';
import arrowRight from '../../../assets/icons/arrow-right-16.svg';

// A news post. The posts live on the company's social networks, so the card links out;
// the title is the link and is stretched over the whole card.
export default function NewsCard({ post, linkLabel, newTabLabel, headingLevel: Heading = 'h2' }) {
  return (
    <article className="lp-news-card">
      <div className="lp-news-card__image">
        {post.image ? <img src={post.image} alt="" loading="lazy" decoding="async" /> : <ImagePlaceholder />}
      </div>
      <p className="lp-news-card__meta">
        <Badge>{post.source}</Badge>
        <time dateTime={post.date}>{post.dateLabel}</time>
      </p>
      <Heading className="lp-news-card__title">
        <a className="lp-news-card__title-link" href={post.url} target="_blank" rel="noopener noreferrer">
          {post.title}
          <span className="visually-hidden"> {newTabLabel}</span>
        </a>
      </Heading>
      <p className="lp-news-card__excerpt">{post.text}</p>
      <span className="lp-news-card__link" aria-hidden="true">
        {linkLabel}
        <Icon src={arrowRight} size={16} />
      </span>
    </article>
  );
}

NewsCard.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string,
    source: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    dateLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  linkLabel: PropTypes.string.isRequired,
  newTabLabel: PropTypes.string.isRequired,
  headingLevel: PropTypes.elementType,
};
