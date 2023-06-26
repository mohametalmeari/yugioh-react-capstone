import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardsType from '../components/CardsType';

describe('Cards Type Component', () => {
  afterEach(() => cleanup());
  test('renders type', () => {
    render(
      <MemoryRouter>
        <CardsType
          key="777"
          typeId="777"
          typeName="Spell Card"
          typeCount={50}
        />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Spell Card/i)).toBeInTheDocument();
    expect(screen.getByText(/50 cards/i)).toBeInTheDocument();
  });
  test('renders type image', () => {
    render(
      <MemoryRouter>
        <CardsType
          key="999"
          typeId="999"
          typeName="Spell Card"
          typeCount={50}
        />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('img-2')).toBeInTheDocument();
  });
  test('renders Type Snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <CardsType
          key="888"
          typeId="888"
          typeName="Spell Card"
          typeCount={50}
        />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
