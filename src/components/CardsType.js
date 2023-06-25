import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ArrowIcon } from '../icons';

const CardsType = ({ typeId, typeName, typeCount }) => (
  <NavLink
    to={typeId}
  >
    <div className="cards-type">
      <ArrowIcon />
      <div className="streched-gap" />
      <h3 className="type-title">{typeName}</h3>
      <p className="type-count">
        {typeCount}
        {' '}
        cards
      </p>
    </div>
  </NavLink>
);
CardsType.propTypes = {
  typeId: PropTypes.number.isRequired,
  typeName: PropTypes.string.isRequired,
  typeCount: PropTypes.number.isRequired,
};

export default CardsType;
