import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../../app/page';

describe('Home', () => {
  beforeEach(() => {
    vi.spyOn(globalThis.crypto, 'randomUUID').mockReturnValue('id-1');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders starter todos and remaining badge', () => {
    render(<Home />);

    expect(screen.getByText('Stellar Todos')).toBeInTheDocument();
    expect(screen.getByText('2 left')).toBeInTheDocument();

    const list = screen.getByRole('list');
    expect(within(list).getByText('Sketch your next idea')).toBeInTheDocument();
    expect(within(list).getByText('Break it into tasks')).toBeInTheDocument();
    expect(within(list).getByText('Ship something small today')).toBeInTheDocument();
  });

  it('adds a todo and resets the input', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const input = screen.getByLabelText('Add a todo');
    await user.type(input, 'Write more tests');
    await user.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByText('Write more tests')).toBeInTheDocument();
    expect(input).toHaveValue('');
    expect(screen.getByText('3 left')).toBeInTheDocument();
  });

  it('filters by completed status', async () => {
    const user = userEvent.setup();
    render(<Home />);

    await user.click(screen.getByRole('button', { name: 'Completed' }));
    const items = screen.getAllByRole('listitem');

    expect(items).toHaveLength(1);
    expect(within(items[0]).getByText('Break it into tasks')).toBeInTheDocument();
    expect(screen.getByText('Clear completed')).toBeEnabled();
  });
});
