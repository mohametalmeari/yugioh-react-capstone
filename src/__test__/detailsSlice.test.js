import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import mockAxios from 'axios';
import { Provider } from 'react-redux';
import { act } from 'react-test-renderer';
import store from '../Redux/store';
import Details from '../components/Details';
import { getCardsDetails } from '../Redux/details/detailsSlice';

describe('Details Slice', () => {
  afterEach(() => cleanup());
  const mockedData = {
    // Here goes the mocked resule
    // Note: The following 'data:' is part of the returned results, this is not always the case
    data: [
      {
        id: '34541863',
        race: 'Beast-Warrior',
        type: 'Normal Monster',
      },
      {
        id: '89718302',
        race: 'Aqua',
        type: 'Normal Monster',
      },
      {
        id: '89558090',
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

  test('fetches api', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: mockedData,
    }));
    const receivedData = await store.dispatch(getCardsDetails());
    expect(receivedData.payload).toBe(mockedData.data);
  });

  test('renders fetched data', async () => {
    delete window.location;
    window.location = { pathname: '/Normal Monster' };
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: mockedData,
    }));
    await act(async () => { // use act(async ... ) to display data after loading
      render(
        <MemoryRouter>
          <Provider store={store}>
            <Details />
          </Provider>
        </MemoryRouter>,
      );
    });
    expect(screen.getByText(/Normal Monster/i)).toBeInTheDocument();
    expect(screen.getByText(/Aqua/i)).toBeInTheDocument();
    expect(screen.getByText(/2 cards/i)).toBeInTheDocument();
  });
});
