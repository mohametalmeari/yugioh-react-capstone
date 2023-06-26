import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Details from '../components/Details';
import store from '../Redux/store';

describe('Cards Details Component', () => {
  beforeEach(() => {
    cleanup();
    delete window.location;
    window.location = { pathname: '/type-Union-Effect-Monster' };
  });
  afterEach(() => {
    cleanup();
  });
  test('renders race', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Details />
        </Provider>
      </MemoryRouter>,
    );
    expect(screen.getByText(/Type Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Union Effect Monster/i)).toBeInTheDocument();
    expect(screen.getByText(/STATS BY RACE/i)).toBeInTheDocument();
  });
  test('renders header image', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Details />
        </Provider>
      </MemoryRouter>,
    );
    expect(screen.getByTestId('img-3')).toBeInTheDocument();
  });
  test('renders Loading', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Details />
        </Provider>
      </MemoryRouter>,
    );
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
  test('renders Details Page Snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Details />
        </Provider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
