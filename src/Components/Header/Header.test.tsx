import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';

describe('Header Component', () => {
    it('renders the header with the correct title', () => {
        render(<Header showFilters={false} setShowFilters={jest.fn()} />);

        const titleElement = screen.getByText(/spring palette/i);
        expect(titleElement).toBeInTheDocument();
    });

    it('displays the correct button text based on showFilters prop', () => {
        const setShowFiltersMock = jest.fn();

        // Case when showFilters is false
        render(<Header showFilters={false} setShowFilters={setShowFiltersMock} />);
        expect(screen.getByText(/show filters/i)).toBeInTheDocument();

        // Case when showFilters is true
        render(<Header showFilters={true} setShowFilters={setShowFiltersMock} />);
        expect(screen.getByText(/hide filters/i)).toBeInTheDocument();
    });

    it('calls setShowFilters when the button is clicked', () => {
        const setShowFiltersMock = jest.fn();
        render(<Header showFilters={false} setShowFilters={setShowFiltersMock} />);

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(setShowFiltersMock).toHaveBeenCalledTimes(1);
    });
});
