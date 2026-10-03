import PropTypes from 'prop-types';
import Icon from '../../ui/Icon/Icon';
import quoteIcon from '../../../assets/icons/quote-40.svg';

// A large quotation inside editorial pages.
export default function QuoteBlock({ quote, author }) {
  return (
    <figure className="lp-quote-block">
      <Icon src={quoteIcon} size={40} className="lp-quote-block__icon" />
      <div className="lp-quote-block__body">
        <blockquote className="lp-quote-block__quote">
          <p>{quote}</p>
        </blockquote>
        {author && <figcaption className="lp-quote-block__author">{author}</figcaption>}
      </div>
    </figure>
  );
}

QuoteBlock.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string,
};
