import { render, screen, fireEvent } from '@testing-library/react';
import { ColorCard } from './ColorCard';

const mockDeleteColor = jest.fn();

describe('ColorCard Component', () => {
  const color = {
    id: '1',
    colorHex: '#00000',
    colorName: 'black',
  };

  it('renders the color card with the correct color and hex value', () => {
    render(<ColorCard color={color} deleteColor={mockDeleteColor} />);

    // Check if the hex color value is rendered
    expect(screen.getByText(color.colorHex)).toBeInTheDocument();

    // Check if the background color is correct
    const colorBox = screen.getByText(color.colorHex).parentElement;
    expect(colorBox).toHaveStyle(`background-color: ${color.colorHex}`);
  });

  it('calls deleteColor function when delete button is clicked', () => {
    render(<ColorCard color={color} deleteColor={mockDeleteColor} />);

    // Click the delete button
    const deleteButton = screen.getByRole('button');
    fireEvent.click(deleteButton);

    // Ensure that the deleteColor function was called with the correct id
    expect(mockDeleteColor).toHaveBeenCalledWith(color.id);
  });
});
