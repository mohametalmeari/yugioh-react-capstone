import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCardsDetails } from '../Redux/details/detailsSlice';
import CardDetails from './CardDetails';
import { ChevronIcon } from '../icons';
import monsterTypeImg from '../images/1.png';
import otherTypeImg from '../images/2.png';

const Details = () => {
  const type = window.location.pathname.split('/type-')[1].replace(/-/g, ' ');
  const { detailsList, isLoading } = useSelector((state) => state.details);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCardsDetails(type));
  }, [type, dispatch]);

  return (
    <div className="container">
      <nav>
        <NavLink
          className="nav-link"
          to="/"
        >
          <ChevronIcon />
        </NavLink>
        <span>Type Details</span>
      </nav>
      <header>
        <img data-testid="img-3" className="header-img" src={type.includes('Monster') ? monsterTypeImg : otherTypeImg} alt="Type" />
        <div className="stretched-gap" />
        <div className="header-content">
          <h2 className="races-title">
            {type}
          </h2>
          <p>
            {detailsList.reduce((sum, obj) => sum + obj.count, 0)}
            {' '}
            cards
          </p>
        </div>
      </header>
      <main>
        <h2 className="list-title">STATS BY RACE</h2>
        <section className="details-list">
          {isLoading && <p>Loading...</p>}
          {!isLoading && detailsList.map((item) => (
            <CardDetails
              key={item.raceKay}
              cardsRace={item.race}
              cardsCount={item.count}
            />
          ))}
        </section>
      </main>
    </div>
  );
};
export default Details;
