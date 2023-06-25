import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCardsDetails } from '../Redux/details/detailsSlice';
import CardDetails from './CardDetails';
import headerImg from '../images/5.png';
import { ChevronIcon } from '../icons';

const Details = () => {
  const type = window.location.pathname.split('/').slice(1).join('/').replace(/-/g, ' ');
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
        <img className="header-img" src={headerImg} alt="Logo" />
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
      <body>
        <h2 className="list-title">STATS BY RACE</h2>
        <section className="details-list">
          {isLoading && <p>Loading...</p>}
          {!isLoading && detailsList.map((item) => (
            <CardDetails
              key={item.id}
              cardsRace={item.race}
              cardsCount={item.count}
            />
          ))}
        </section>
      </body>
    </div>
  );
};
export default Details;
