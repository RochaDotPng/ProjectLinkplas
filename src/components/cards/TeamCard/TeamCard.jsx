import PropTypes from 'prop-types';
import ImagePlaceholder from '../../ui/ImagePlaceholder/ImagePlaceholder';

export default function TeamCard({ name, role, since, bio, photo, headingLevel: Heading = 'h3' }) {
  return (
    <article className="lp-team-card">
      <div className="lp-team-card__photo">
        {photo ? <img src={photo} alt="" loading="lazy" decoding="async" /> : <ImagePlaceholder />}
      </div>
      <div className="lp-team-card__info">
        <Heading className="lp-team-card__name">{name}</Heading>
        <p className="lp-team-card__role">{role}</p>
        <p className="lp-team-card__since">{since}</p>
        {bio && <p className="lp-team-card__bio">{bio}</p>}
      </div>
    </article>
  );
}

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  since: PropTypes.string.isRequired,
  bio: PropTypes.string,
  photo: PropTypes.string,
  headingLevel: PropTypes.elementType,
};
