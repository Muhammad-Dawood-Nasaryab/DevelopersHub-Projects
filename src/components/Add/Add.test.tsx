import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../context/themeContext';
import Add from './Add';

describe('Add Component', () => {
  const mockOnSubmit = vi.fn();

  const setup = () => {
    render(
      <ThemeProvider>
        <Add onSubmit={mockOnSubmit} />
      </ThemeProvider>
    );
  };

  it('renders Add form with empty fields', () => {
    setup();

    expect(screen.getByLabelText('Title:')).toHaveValue('');
    expect(screen.getByLabelText('Description:')).toHaveValue('');
  });
});