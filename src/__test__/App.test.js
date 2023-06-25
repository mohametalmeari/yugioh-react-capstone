import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../Redux/store';

describe('Main Page', () => {
  test('renders titles', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    expect(screen.getByText(/All Cards/i)).toBeInTheDocument();
    expect(screen.getByText(/YU-GI-OH!/i)).toBeInTheDocument();
    expect(screen.getByText(/STATS BY TYPE/i)).toBeInTheDocument();
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
