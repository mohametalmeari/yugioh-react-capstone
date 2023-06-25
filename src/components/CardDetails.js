import PropTypes from 'prop-types';
import { ArrowIcon } from '../icons';

const CardDetails = ({ cardsRace, cardsCount }) => (
  <div className="card-details">
    <h3 className="cards-title">
      {/* &quot;
      {'Level '} */}
      {cardsRace}
      {/* &quot;
      {' Monster'} */}
    </h3>
    <p>
      {cardsCount}
      {' '}
      Cards
    </p>
    <ArrowIcon />
  </div>
);
CardDetails.propTypes = {
  cardsRace: PropTypes.string.isRequired,
  cardsCount: PropTypes.string.isRequired,
};

export default CardDetails;
