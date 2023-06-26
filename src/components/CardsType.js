import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ArrowIcon } from '../icons';
import monsterTypeImg from '../images/1.png';
import otherTypeImg from '../images/2.png';

const CardsType = ({ typeId, typeName, typeCount }) => (
  <NavLink
    to={`type-${typeId}`}
  >
    <div className="cards-type">
      <img data-testid="img-2" className="type-img" src={typeName.includes('Monster') ? monsterTypeImg : otherTypeImg} alt="Type" />
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
  typeId: PropTypes.string.isRequired,
  typeName: PropTypes.string.isRequired,
  typeCount: PropTypes.number.isRequired,
};

export default CardsType;
