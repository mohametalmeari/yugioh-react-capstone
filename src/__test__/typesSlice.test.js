import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import mockAxios from 'axios';
import { Provider } from 'react-redux';
import { getTypes } from '../Redux/types/typesSlice';
import store from '../Redux/store';
import Home from '../components/Home';

describe('Types Slice', () => {
  afterEach(() => cleanup());
  const mockedData = {
    // Here goes the mocked resule
    // Note: The following 'data:' is part of the returned results, this is not always the case
    data: [
      {
        id: '34541863',
        race: 'Continuous',
        type: 'Spell Card',
      },
      {
        id: '89718302',
        race: 'Beast-Warrior',
        type: 'Effect Monster',
      },
      {
        id: '89558090',
        race: 'Fiend',
        type: 'Normal Monster',
      },
      {
        id: '89558092',
        race: 'Aqua',
        type: 'Normal Monster',
      },
      {
        id: '89558093',
        race: 'Fish',
        type: 'Normal Monster',
      },
    ],
  };

  test('fetches api for types', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: mockedData,
    }));
    const receivedData = await store.dispatch(getTypes());
    expect(receivedData.payload).toBe(mockedData.data);
  });

  test('renders fetched data', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: mockedData,
    }));
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>,
    );
    expect(screen.getByText(/Effect Monster/i)).toBeInTheDocument();
    expect(screen.getByText(/Normal Monster/i)).toBeInTheDocument();
    expect(screen.getByText(/3 cards/i)).toBeInTheDocument();
  });
});
