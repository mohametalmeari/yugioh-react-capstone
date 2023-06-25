import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getTypes } from '../Redux/types/typesSlice';
import CardsType from './CardsType';
import headerImg from '../images/5.png';
import { RefreshIcon } from '../icons';

const Home = () => {
  const { typesList, isLoading } = useSelector((state) => state.types);
  const dispatch = useDispatch();
  useEffect(() => {
    if (typesList.length === 0) {
      dispatch(getTypes());
    }
  }, [typesList.length, dispatch]);

  return (
    <div className="container">
      <nav>
        <NavLink
          to="/"
          onClick={() => dispatch(getTypes())}
        >
          <RefreshIcon />
        </NavLink>
        <span>All Cards</span>
      </nav>
      <header>
        <img data-testid="img-1" className="header-img" src={headerImg} alt="Logo" />
        <div className="streched-gap" />
        <div className="header-content">
          <h1>
            YU-GI-OH!
          </h1>
          <p>
            {typesList.reduce((sum, obj) => sum + obj.count, 0)}
            {' '}
            cards
          </p>
        </div>
      </header>
      <main>
        <h2 className="list-title">STATS BY TYPE</h2>
        <section className="home-list">
          {isLoading && <p>Loading...</p>}
          {!isLoading && typesList.map((item) => (
            <CardsType
              key={item.typeId}
              typeId={item.typeId}
              typeName={item.type}
              typeCount={item.count}
            />
          ))}
        </section>
      </main>
    </div>
  );
};
export default Home;
