import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  test('displays the correct creator name', () => {
    render(<Footer />);
    expect(screen.getByText(/Sandra Mitić/i)).toBeInTheDocument();
  });
});
