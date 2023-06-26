import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardDetails from '../components/CardDetails';

describe('Cards Details Component', () => {
  afterEach(() => cleanup());
  test('renders race', () => {
    render(
      <MemoryRouter>
        <CardDetails
          key={888}
          cardsRace="Continuous"
          cardsCount={20}
        />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Continuous/i)).toBeInTheDocument();
    expect(screen.getByText(/20 cards/i)).toBeInTheDocument();
  });
  test('renders Race Snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <CardDetails
          key={888}
          cardsRace="Continuous"
          cardsCount={20}
        />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
