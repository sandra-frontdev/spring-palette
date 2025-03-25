import { render, screen } from '@testing-library/react';
import App from './App';

// Mock HomeContainer for testing
jest.mock('Pages/Home', () => ({
  HomeContainer: () => <div>Home Container</div>,
}));

describe('App Component', () => {
  it('renders the HomeContainer', () => {
    render(<App />);

    // Check if HomeContainer is rendered
    const homeContainerElement = screen.getByText(/home container/i);
    expect(homeContainerElement).toBeInTheDocument();
  });
});
