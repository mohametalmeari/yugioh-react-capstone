import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../Redux/store';

describe('Total App', () => {
  afterEach(() => cleanup());
  test('renders titles', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    expect(screen.getByText(/YU-GI-OH!/i)).toBeInTheDocument();
    expect(screen.getByText(/All Cards/i)).toBeInTheDocument();
    expect(screen.getByText(/STATS BY TYPE/i)).toBeInTheDocument();
  });
  test('renders header image', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    expect(screen.getByTestId('img-1')).toBeInTheDocument();
  });
  test('renders Loading', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
  test('renders Snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
