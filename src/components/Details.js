import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCardsDetails } from '../Redux/details/detailsSlice';
import CardDetails from './CardDetails';
import headerImg from '../images/5.png';

const Details = () => {
  const type = window.location.pathname.split('/').slice(1).join('/').replace(/-/g, ' ');
  const { detailsList, isLoading } = useSelector((state) => state.details);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(type);
    dispatch(getCardsDetails(type));
    console.log(detailsList);
    console.log(isLoading);
  }, [type]);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="container">
      <header>
        <img className="header-img" src={headerImg} alt="Logo" />
        <div className="header-content">
          <h1>
            {type}
          </h1>
          <p>
            {detailsList.length}
            {' '}
            cards
          </p>
        </div>
      </header>
      <body>
        <h2 className="list-title">CARDS DETAILS</h2>
        <section className="details-list">
          {detailsList.map((item) => (
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
