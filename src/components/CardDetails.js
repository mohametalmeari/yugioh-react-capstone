import PropTypes from 'prop-types';
import { ArrowIcon } from '../icons';

const CardDetails = ({ cardsRace, cardsCount }) => (
  <div className="card-details">
    <h3 className="race-title">
      {cardsRace}
    </h3>
    <p>
      {cardsCount}
      {' '}
      cards
    </p>
    <ArrowIcon />
  </div>
);
CardDetails.propTypes = {
  cardsRace: PropTypes.string.isRequired,
  cardsCount: PropTypes.number.isRequired,
};

export default CardDetails;
