import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCards } from '../Redux/cards/cardsSlice';

const Home = () => {
  const { cardsList, isLoading } = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCards());
    console.log(cardsList);
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="home-container">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="home-container">
      <header className="home-header">
        <img alt="Logo" />
        <div>
          <h1>
            YU-GI-OH!
          </h1>
          <p>
            5000 cards
          </p>
        </div>
      </header>
      <body>
        <h2 className="home-list-header">STATS BY TYPE</h2>
        <section className="home-list">

          <div>
            <img alt=">" />
            <h3>Trap Card</h3>
            <p>100 cards</p>
          </div>

          <div>
            <img alt=">" />
            <h3>Spell Card</h3>
            <p>100 cards</p>
          </div>

          <div>
            <img alt=">" />
            <h3>Trap Card</h3>
            <p>100 cards</p>
          </div>

          <div>
            <img alt=">" />
            <h3>Spell Card</h3>
            <p>100 cards</p>
          </div>

        </section>
      </body>
    </div>
  );
};
export default Home;
